import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

const API_KEY = '18219611-d680c916f1df926335f357bd5';

export class App extends Component {
  state = {
    qeury: '',
    img: [],
    isModalVisible: false,
  };
  handleQuery = e => {
    this.setState({ input: e });
    axios
      .get(
        `https://pixabay.com/api/?q=${e}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(res => this.setState({ img: res.data.hits }));
  };
  hanleOpenmodal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <>
        <button onClick={this.hanleOpenmodal} type="button">
          open
        </button>
        {this.state.isModalVisible && (
          <Modal toogleModal={this.hanleOpenmodal} />
        )}
        <Searchbar onSubmit={this.handleQuery} />
        {this.state.img.length > 0 ? (
          <ImageGallery>
            <ImageGalleryItem
              toogleModal={this.hanleOpenmodal}
              img={this.state.img}
            />
          </ImageGallery>
        ) : null}
        {/* <ul>
          {this.state.img.map(el => (
            <li key={el.id}>
              <img src={el.webformatURL} alt={el.tag} />
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default App;
