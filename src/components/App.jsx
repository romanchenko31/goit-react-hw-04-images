import React, { PureComponent } from 'react';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';

class App extends PureComponent {
  state = {
    searchQuery: null,
  };

  getValue = value => {
    this.setState({
      searchQuery: value,
    });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.getValue} />
        {searchQuery && <ImageGallery searchQuery={searchQuery} />}
        {!searchQuery && <h2>Найди фото</h2>}
      </>
    );
  }
}

export { App };
