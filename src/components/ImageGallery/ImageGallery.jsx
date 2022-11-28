import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import s from '../ImageGallery/ImageGallery.module.css';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import MoreButton from '../MoreButton/MoreButton.jsx';
import ServiceApi from '../../serviceApi/serviceApi.js';
const getGallery = new ServiceApi();

class ImageGallery extends React.PureComponent {
  state = {
    images: null,
    loading: false,
    page: 1,
  };

  async componentDidMount() {
    const { searchQuery } = this.props;
    this.setState({ loading: true });
    getGallery.queryGallery = searchQuery;
    try {
      this.setState({
        images: await getGallery.getGallery(),
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  onIncriment = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchQuery } = this.props;
    if (prevState.page !== page) {
      this.setState({ loading: true });
      try {
        this.setState({
          images: [...prevState.images, ...(await getGallery.getGallery(page))],
        });
      } finally {
        this.setState({ loading: false });
      }
    } else if (prevProps.searchQuery !== searchQuery) {
      this.setState({
        images: null,
        loading: true,
      });
      getGallery.queryGallery = searchQuery;
      const PAGE = 1;
      try {
        this.setState({
          images: await getGallery.getGallery(PAGE),
        });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <>
        {images && (
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
          <MoreButton onClick={this.onIncriment} />
        )}
      </>
    );
  }
}

export default ImageGallery;
