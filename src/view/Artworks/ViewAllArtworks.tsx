import React, { useState, useEffect } from 'react';
import { viewAllArtworks } from '@/src/controller/ArtworkController';
import Image from 'next/image';

const ViewAllMedia: React.FC = () => {
  const [artworks, setArtworks] = useState<any[]>([]);

  useEffect(() => {
    // Fetch artworks when the component mounts
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const fetchedArtworks = await viewAllArtworks();
      setArtworks(fetchedArtworks);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">All Artworks</h1>
      <div className="grid grid-cols-3 gap-8">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{artwork.name}</h2>
            <p className="text-gray-600">{artwork.date}</p>
            <p className="text-gray-700">{artwork.description}</p>
            <div className="mt-4">
              {artwork.photos.map((photo: string, index: number) => (
                <Image key={index} src={photo} alt={`Artwork ${index + 1}`} className="w-full mb-2 rounded-lg" width={300} height={300} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllMedia;
