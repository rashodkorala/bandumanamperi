import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc, DocumentReference } from 'firebase/firestore';
import { storage } from '@/utils/firebase-config'; // Import your Firebase storage configuration

interface Artwork {
  name: string;
  date: string;
  description: string;
  photos: File[];
  type: string;
}

const uploadArtwork = async (artwork: Artwork): Promise<DocumentReference | null> => {
  try {
    const photoURLs: string[] = [];

    // Upload each photo to Firebase Storage
    for (const photo of artwork.photos) {
      const storageInstance = storage;
      const storageRefInstance = storageRef(storageInstance, `artworks/${artwork.type}/${photo.name}`);
      const uploadTask = uploadBytesResumable(storageRefInstance, photo);
      const snapshot = await uploadTask;
      const downloadURL = await getDownloadURL(snapshot.ref);
      photoURLs.push(downloadURL);
    }

    // Save metadata and photo URLs to Firestore
    const firestore = getFirestore();
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

export { uploadArtwork };
