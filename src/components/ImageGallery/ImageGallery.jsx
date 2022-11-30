import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import s from '../ImageGallery/ImageGallery.module.css';
import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import MoreButton from '../MoreButton/MoreButton.jsx';
import ServiceApi from '../../serviceApi/serviceApi.js';
const serviceGalleryApi = new ServiceApi();
const startPage = 1;

const ImageGallery = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(startPage);

  useEffect(() => {
    const fetchFirstPageData = async () => {
      try {
        setPage(startPage);
        setLoading(true);
        serviceGalleryApi.queryGallery = searchQuery;
        const resultFirstPage = await serviceGalleryApi.getGallery(startPage);
        setImages(resultFirstPage);
      } finally {
        setLoading(false);
      }
    };
    fetchFirstPageData();
  }, [searchQuery]);

  useEffect(() => {
    if (page > 1) {
      const fetchMorePageData = async () => {
        try {
          setLoading(true);
          const resultNextPage = await serviceGalleryApi.getGallery(page);
          setImages(images => [...images, ...resultNextPage]);
        } finally {
          setLoading(false);
        }
      };
      fetchMorePageData();
    }
  }, [page]);

  const onIncriment = () => {
    setPage(page + 1);
  };

  return (
    <>
      {images.length > 0 && (
        <ul className={s.ImageGallery}>
          <ImageGalleryItem gallery={images} />
        </ul>
      )}
      {loading ? (
        <>
          <ThreeDots
            height="40"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={true}
          />
        </>
      ) : (
        <MoreButton onClick={onIncriment} />
      )}
    </>
  );
};

export default ImageGallery;
