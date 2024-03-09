import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, DocumentReference,getDocs, deleteDoc, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { firestore, storage } from '@/utils/firebase-config';


interface Artwork {
  id?: string;
  name: string;
  date: string;
  description: string;
  photos: File[];
  type: string;
}

// Upload artwork to Firebase Storage and save metadata to Firestore
const uploadArtwork = async (artwork: Artwork): Promise<DocumentReference | null> => {
  try {
    const photoURLs: string[] = [];

    // Upload each photo to Firebase Storage
    for (const photo of artwork.photos) {
      
      const storageRefInstance = storageRef(storage, `artworks/${artwork.type}/${photo.name}`);
      const uploadTask = uploadBytesResumable(storageRefInstance, photo);
      const snapshot = await uploadTask;
      const downloadURL = await getDownloadURL(snapshot.ref);
      photoURLs.push(downloadURL);
    }

    // Save metadata and photo URLs to Firestore
    const artworkCollectionRef = collection(firestore, 'artworks');

    const docRef = await addDoc(artworkCollectionRef, {
      name: artwork.name,
      date: artwork.date,
      description: artwork.description,
      photos: photoURLs,
      type: artwork.type
    });

    console.log('Artwork document written with ID: ', docRef.id);

    return docRef;
  } catch (error) {
    console.error('Error uploading artwork:', error);
    return null;
  }
};

//View All the Artworks from the Firestore Database
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

    return artworks;
  } catch (error) {
    console.error('Error fetching artworks:', error);
    return [];
  }
};

export { uploadArtwork, viewAllArtworks };