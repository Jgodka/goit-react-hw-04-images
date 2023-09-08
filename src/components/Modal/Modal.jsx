import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModalEscapeKey);
    window.addEventListener('click', this.handleCloseClickOverlay);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalEscapeKey);
    window.removeEventListener('click', this.handleCloseClickOverlay);
  }

  handleModalEscapeKey = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClose = () => {
    this.props.onClose();
  };

  render() {
    const { largeImageUrl } = this.props;
    return (
      <Overlay className="Overlay" onClick={this.onOverlayClose}>
        <ModalStyled className="Modal">
          <img src={largeImageUrl} alt="" />
        </ModalStyled>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImageUrl: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
