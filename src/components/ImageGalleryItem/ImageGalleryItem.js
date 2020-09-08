import React from 'react';

const ImageGalleryItem = ({ img, toogleModal }) => {
  return img.map(el => (
    <li className="ImageGalleryItem" key={el.id}>
      <img
        onClick={toogleModal}
        className="ImageGalleryItem-image"
        src={el.webformatURL}
        alt={el.tag}
      />
    </li>
  ));
};

export default ImageGalleryItem;
