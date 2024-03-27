// ArtWorkMain.tsx
import { useState } from 'react';
import ViewAllArtworks from './ViewAllArtworks';
import UploadArtworks from './UplodArtworks';

const ArtWorkMain = () => {
  const [viewMode, setViewMode] = useState<'view' | 'upload'>('view');

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-4">
        <button
          onClick={() => setViewMode('view')}
          className={`px-4 py-2 ${viewMode === 'view' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg mr-2`}
        >
          View Artworks
        </button>
        <button
          onClick={() => setViewMode('upload')}
          
          className={`px-4 py-2 ${viewMode === 'upload' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg`}
        >
          Upload Artworks
        </button>
      </div>

      {viewMode === 'view' ? <ViewAllArtworks /> : <UploadArtworks />}
    </div>
  );
};

export default ArtWorkMain;
