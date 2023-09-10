import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';

export const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleModalEscapeKey = event => {
      if (event.code === 'Escape') {
        return onClose();
      }
    };
    window.addEventListener('keydown', handleModalEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleModalEscapeKey);
    };
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <ModalStyled>
        <img src={largeImageURL} alt="" />
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
