import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemOne,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, imageUrl, onClick }) => {
  return (
    <ImageGalleryItemOne>
      <ImageGalleryItemImage id={id} src={imageUrl} alt="" onClick={onClick} />
    </ImageGalleryItemOne>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
