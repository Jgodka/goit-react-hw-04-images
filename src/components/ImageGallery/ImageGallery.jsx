import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  handleClick = largeImageURL => {
    this.props.onClose(largeImageURL);
  };

  render() {
    const { images } = this.props;

    return (
      <ImageGalleryStyled>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            imageUrl={webformatURL}
            onClick={() => this.handleClick(largeImageURL)}
          />
        ))}
      </ImageGalleryStyled>
    );
  }
}
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
