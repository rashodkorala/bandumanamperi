import { uploadArtwork } from '../../Controller/ArtworkController';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {}

interface MediaItem {
  name: string;
  date: string;
  description: string;
  files: File[];
}

enum MediaType {
  Painting = 'Painting',
  Performance = 'Performance',
  Installation = 'Installations',
}

const UplodMediaMain = (props: Props) => {
  const [mediaType, setMediaType] = useState<MediaType>(MediaType.Painting);
  const [mediaItem, setMediaItem] = useState<MediaItem>({ name: '', date: '', description: '', files: []});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMediaTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMediaType(event.target.value as MediaType);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setMediaItem({ ...mediaItem, [name]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setMediaItem(prevState => ({
        ...prevState,
        files: [...prevState.files, ...Array.from(files)]
      }));
    }
  };

  const handleUpload = () => {
    console.log('Uploading...');

    uploadArtwork({
      name: mediaItem.name,
      date: mediaItem.date,
      description: mediaItem.description,
      photos: mediaItem.files,
      type: mediaType
    }).then((res) => {
      console.log('Upload complete:', res);
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-3xl w-full p-8 bg-white dark:bg-gray-800 dark:text-white text-black rounded-lg shadow-lg">
        <h2 className="text-3xl mb-6 text-center">Upload Media</h2>
        <div className="mb-6">
          <div className="relative justify-center items-center gap-4">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center gap-2"
              type="button"
              onClick={toggleDropdown}
            >
              {mediaType} <svg className={`w-2.5 h-2.5 ms-3 ${isDropdownOpen ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            {isDropdownOpen && (
              <div id="dropdown" className="z-10 absolute top-full mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="rounded-xl py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <button className="rounded-xl w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => { setMediaType(MediaType.Painting); toggleDropdown(); }}>Painting</button>
                  </li>
                  <li>
                    <button className="rounded w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => { setMediaType(MediaType.Performance); toggleDropdown(); }}>Performance</button>
                  </li>
                  <li>
                    <button className="rounded w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => { setMediaType(MediaType.Installation); toggleDropdown(); }}>Installations</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col  gap-6 mb-6">
          <h3 className="text-xl mb-2">{mediaType}</h3>
          <input type="text" name="name" placeholder="Name" value={mediaItem.name} onChange={handleInputChange} className="w-full p-2 mb-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 bg-gray-300 dark:bg-gray-900 text-black dark:text-white" />
          <input type="text" name="date" placeholder="Date" value={mediaItem.date} onChange={handleInputChange} className="w-full p-2 mb-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 bg-gray-300 dark:bg-gray-900 text-black dark:text-white" />
          {mediaItem.files.length > 0 && mediaItem.files.map((file, index) => (
            <div key={index} className="grid grid-flow-row overflow-auto mt-4">
              {file.type.startsWith('image') ? (
                <div className='flex justify-center items-center'>
                  <Image src={URL.createObjectURL(file)} width={500} height={500} alt={`Uploaded Image ${index + 1}`} />
                </div>
              ) : (
                <video controls className="max-w-xl w-full h-auto mb-2">
                  <source src={URL.createObjectURL(file)} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
          <input type="file" name="file" accept="image/*, video/*" multiple onChange={handleFileChange} className="w-full p-2 mb-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 bg-gray-300 dark:bg-gray-900 text-black dark:text-white" />
          
          <textarea name="description" placeholder="Description" value={mediaItem.description} onChange={handleInputChange} className="w-full p-2 mb-2 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 bg-gray-300 dark:bg-gray-900 text-black dark:text-white" />
        </div>
        <button onClick={handleUpload} className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Upload</button>
      </div>
    </div>
  );
};

export default UplodMediaMain;
