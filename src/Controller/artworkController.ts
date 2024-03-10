import { collection, QuerySnapshot, DocumentData, getDocs } from "firebase/firestore";
import { storage, firestore } from "../../utils/firebase-config";

interface Artwork {
    id?: string;
    name: string;
    date: string;
    description: string;
    photos: File[];
    type: string;
}

//get all artworks from the firestore database
const viewAllArtworks = async (): Promise<Artwork[]> => {
    try {

        const artworksCollectionRef = collection(firestore, 'artworks');
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(artworksCollectionRef);

        const artworks: Artwork[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const artwork: Artwork = {
                id: doc.id,
                name: data.name,
                date: data.date,
                description: data.description,
                photos: data.photos,
                type: data.type
            };
            artworks.push(artwork);
        });
        console.log(artworks);
        return artworks;
    } catch (error) {
        console.error('Error fetching artworks:', error);
        return [];
    }
};


//retrive all artworks which are of the given type

const viewArtworksByType = async (type: string): Promise<Artwork[]> => {
    try {
        const artworksCollectionRef = collection(firestore, 'artworks');
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(artworksCollectionRef);

        const artworks: Artwork[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.type === type) {
                const artwork: Artwork = {
                    id: doc.id,
                    name: data.name,
                    date: data.date,
                    description: data.description,
                    photos: data.photos,
                    type: data.type
                };
                artworks.push(artwork);
            }
        });

        return artworks;
    } catch (error) {
        console.error('Error fetching artworks:', error);
        return [];
    }
};

export { viewAllArtworks, viewArtworksByType };