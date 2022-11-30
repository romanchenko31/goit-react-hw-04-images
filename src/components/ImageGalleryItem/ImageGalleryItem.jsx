import { useState, useEffect } from 'react';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { Element, scroller } from 'react-scroll';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import nextId from 'react-id-generator';

const ImageGalleryItem = ({ gallery }) => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  const indexScroll = gallery.length - 12;

  useEffect(() => {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  }, [gallery]);

  const onCloseModal = value => {
    setLoading(value);
  };

  const getId = e => {
    setLoading(!loading);
    setId(e.currentTarget.id);
  };

  return (
    <>
      {gallery &&
        gallery.map(value => {
          return gallery[indexScroll].id === value.id ? (
            <li
              key={nextId()}
              id={value.id}
              onClick={getId}
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
              onClick={getId}
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
        <ModalWindow onClose={onCloseModal} gallery={gallery} id={id} />
      )}
    </>
  );
};

export default ImageGalleryItem;
