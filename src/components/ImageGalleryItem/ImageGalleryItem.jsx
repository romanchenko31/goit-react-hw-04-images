import { Component } from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { Element, scroller } from 'react-scroll';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import nextId from 'react-id-generator';

class ImageGalleryItem extends Component {
  state = {
    loading: false,
    id: null,
  };
  componentDidUpdate(prevProps) {
    const { gallery } = this.props;
    if (prevProps.gallery !== gallery) {
      if (gallery.length > 12) {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -100,
        });
      }
    }
  }

  onCloseModal = value => {
    this.setState({
      loading: value,
    });
  };

  getId = e => {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
      id: e.currentTarget.id,
    });
  };

  render() {
    const { gallery } = this.props;
    const { loading, id } = this.state;
    const indexScroll = gallery.length - 12;

    return (
      <>
        {gallery &&
          gallery.map(value => {
            return gallery[indexScroll].id === value.id ? (
              <li
                key={nextId()}
                id={value.id}
                onClick={this.getId}
                className={s.ImageGalleryItem}
              >
                <Element name="scroll-to-element"></Element>
                <img
                  className={s.ImageGalleryItemImage}
                  src={value.webformatURL}
                  alt={value.tags}
                />
              </li>
            ) : (
              <li
                key={nextId()}
                onClick={this.getId}
                id={value.id}
                className={s.ImageGalleryItem}
              >
                <img
                  className={s.ImageGalleryItemImage}
                  src={value.webformatURL}
                  alt={value.tags}
                />
              </li>
            );
          })}
        {loading && (
          <ModalWindow onClose={this.onCloseModal} gallery={gallery} id={id} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
