import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

class ImageGallery extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  handleOpenModal = e => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { images, onItemClick } = this.props;
    return (
      <ul onClick={this.handleOpenModal}>
        {images &&
          images.map(image => (
            <li key={image.id}>
              <ImageGalleryItem {...image} onItemClick={onItemClick} />
            </li>
          ))}
      </ul>
    );
  }
}

export default ImageGallery;
