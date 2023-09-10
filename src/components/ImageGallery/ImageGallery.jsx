import PropTypes from 'prop-types';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClose }) => {
  const handleClick = largeImageURL => {
    onClose(largeImageURL);
  };
  return (
    <ImageGalleryStyled>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          imageUrl={webformatURL}
          onClick={() => handleClick(largeImageURL)}
        />
      ))}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};
