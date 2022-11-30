import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  const getValue = value => {
    setSearchQuery(value);
  };

  return (
    <>
      <Searchbar onSubmitProp={getValue} />
      {searchQuery && <ImageGallery searchQuery={searchQuery} />}
      {!searchQuery && <h2>Найди фото</h2>}
    </>
  );
};

export { App };
