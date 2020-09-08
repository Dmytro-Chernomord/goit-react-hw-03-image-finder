import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import defImg from '../default.jpg';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    toogleModal: PropTypes.func.isRequired,
    img: PropTypes.string.isRequired,
  };
  static defaultProps = {
    img: defImg,
  };
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
          <img src={this.props.img} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
