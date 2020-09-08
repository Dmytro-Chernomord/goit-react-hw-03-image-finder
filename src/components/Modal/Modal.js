import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import defImage from '../default.jpg';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  escapeClose = e => {
    if (e.code === 'Escape') {
      this.props.toogleModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.escapeClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeClose);
  }
  closeModal = event => {
    if (event.currentTarget === event.target) {
      this.props.toogleModal();
    }
  };
  render() {
    return createPortal(
      <div onClick={this.closeModal} className="Overlay">
        <div className="Modal">
          <img src={defImage} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

// const Modal = ({ toogleModal }) => {
//   const closeModal = event => {
//     if (event.currentTarget === event.target) {
//       toogleModal();
//     }
//   };
//   return (
//     <div onClick={closeModal} className="Overlay">
//       <div className="Modal">
//         <img src={defImage} alt="" />
//       </div>
//     </div>
//   );
// };

export default Modal;
