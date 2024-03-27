import { ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, DocumentReference,getDocs, deleteDoc, QuerySnapshot, DocumentData, doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '@/utils/firebase-config';
import { getAuth } from 'firebase/auth';


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

  const auth = getAuth();
  if (!auth.currentUser) {

    console.error('User is not logged in');
    return null;
  }

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
const fetchAllArtworks = async (): Promise<Artwork[]> => {
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

const fetchArtworkById = async (id: string): Promise<Artwork | null> => {
  try {
    const artworkDocRef = doc(firestore, 'artworks', id); // Correct way to get a reference to a single document
    const docSnapshot = await getDoc(artworkDocRef);

    console.log('Document data:', docSnapshot.exists());

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const artwork: Artwork = {
        id: docSnapshot.id,
        name: data.name,
        date: data.date,
        description: data.description,
        photos: data.photos,
        type: data.type
      };
      return artwork;
    }
    return null;
  } catch (error) {
    console.error('Error fetching artwork by ID:', error);
    return null;
  }
};

const updateArtwork = async (id: string, updatedArtwork: Partial<Artwork>): Promise<void> => {
  const artworkRef = doc(firestore, 'artworks', id);
  await updateDoc(artworkRef, updatedArtwork);
  console.log('Artwork document updated with ID: ', id);
};

const deleteArtwork = async (id: string): Promise<void> => {
  // Optionally, delete associated images from storage here
  const artworkRef = doc(firestore, 'artworks', id);
  await deleteDoc(artworkRef);
  console.log('Artwork document deleted with ID: ', id);
};

// Helper function to delete images from Firebase Storage
const deleteImageFromStorage = async (imageUrl: string): Promise<void> => {
  // Note: This assumes you have the image URL and can derive the storage reference from it
  // This might require parsing the URL or storing the reference path in Firestore
  try {
    const imageRef = storageRef(storage, imageUrl); // Adjust this according to how you're storing and accessing URLs
    await deleteObject(imageRef);
    console.log('Image deleted from storage: ', imageUrl);
  } catch (error) {
    console.error('Error deleting image from storage:', error);
  }
};

export { uploadArtwork, fetchAllArtworks, fetchArtworkById, updateArtwork, deleteArtwork };