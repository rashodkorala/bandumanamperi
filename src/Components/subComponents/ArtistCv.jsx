import React, { useState } from "react";

const ArtistCv = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      {isPopupOpen && <div>This is the popup. Add your content here.</div>}
      <button onClick={() => setIsPopupOpen(true)}>Open Popup</button>
    </div>
  );
};

export default ArtistCv;
