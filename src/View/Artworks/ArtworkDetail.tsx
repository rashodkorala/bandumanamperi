import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { deleteArtwork, fetchArtworkById, updateArtwork } from '@/src/Controller/ArtworkController'; // Implement these

const ArtworkDetail: React.FC = () => {
  const [artwork, setArtwork] = useState<any>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const router = useRouter();
  const { artworkId } = router.query;

  useEffect(() => {
    if (artworkId) {
      fetchArtworkDetails(artworkId as string);
    }
  }, [artworkId]);

  const fetchArtworkDetails = async (id: string) => {
    const fetchedArtwork = await fetchArtworkById(id);
    setArtwork(fetchedArtwork);
  };

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleDelete = async () => {
    if (artworkId) {
      await deleteArtwork(artworkId as string);
      router.push('/'); // Navigate back to the home page or gallery
    }
  };

  const handleSave = async (updatedArtwork: any) => {
    if (artworkId) {
      await updateArtwork(artworkId as string, updatedArtwork);
      setArtwork(updatedArtwork);
      setIsEditing(false); // Exit editing mode
    }
  };

  if (!artwork) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-4">{isEditing ? 'Edit Artwork' : artwork.name}</h1>
        <div>
          <button onClick={handleEditToggle} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">{isEditing ? 'Cancel' : 'Edit'}</button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
        </div>
      </div>
      {isEditing ? (
        // Edit mode
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSave({
            ...artwork,
            // Include updated fields here
          });
        }}>
          <input defaultValue={artwork.name} className="border p-2 w-full mb-4" />
          <textarea defaultValue={artwork.description} className="border p-2 w-full mb-4" />
          {/* Include inputs for other fields as needed */}
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save Changes</button>
        </form>
      ) : (
        // View mode
        <div>
          <p className="text-gray-600">{artwork.date}</p>
          <p className="text-gray-700 mb-4">{artwork.description}</p>
          <div>
            {artwork.photos.map((photo: string, index: number) => (
              <Image key={index} src={photo} alt={`Artwork ${index + 1}`} width={500} height={500} layout="responsive" className="mb-2 rounded-lg" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtworkDetail;
