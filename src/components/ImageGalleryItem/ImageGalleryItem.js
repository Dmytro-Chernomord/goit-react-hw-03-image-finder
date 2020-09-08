import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ img, catchGrossImg }) => {
  return img.map(el => (
    <li className="ImageGalleryItem" key={el.id}>
      <img
        onClick={() => catchGrossImg(el.largeImageURL)}
        className="ImageGalleryItem-image"
        src={el.webformatURL}
        alt={el.tag}
        id={el.id}
        key={el.id}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  catchGrossImg: PropTypes.func.isRequired,
  img: PropTypes.array.isRequired,
};
export default ImageGalleryItem;
