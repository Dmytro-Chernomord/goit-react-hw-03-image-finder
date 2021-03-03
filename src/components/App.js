import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Spiner from './Loader/Loader';
import Button from './Button/Button';

const API_KEY = '18219611-d680c916f1df926335f357bd5';

export class App extends Component {
  state = {
    currentPage: 1,
    query: '',
    img: [],
    isModalVisible: false,
    isLoading: false,
    error: null,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query
      // || prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchPictures();
    }
  }
  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  handleQuery = e => {
    if (e !== this.state.query) {
      this.setState({ query: e, currentPage: 1, img: [], error: null });
    } else {
      console.log('hi');
      this.setState(prevState => ({
        query: this.state.query,
        currentPage: prevState.currentPage + 1,
        error: null,
      }));
    }
  };

  catchGrossImg = url => {
    console.log(url);
    this.setState({ largeImage: url });
    this.hanleOpenmodal();
  };

  fetchPictures = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(res =>
        this.setState(prevState => ({
          img: [...prevState.img, ...res.data.hits],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .then(() => {
        if (this.state.currentPage > 2) {
          this.scroll();
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        // if (this.state.currentPage > 2) {
        //   this.scroll();
        // }
      });
  };
  hanleOpenmodal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    const shoudBeVisibleLoadMoreButton =
      this.state.img.length > 0 && !this.state.isLoading;
    return (
      <div className="App">
        {this.state.isModalVisible && (
          <Modal
            toogleModal={this.hanleOpenmodal}
            img={this.state.largeImage}
          />
        )}
        <Searchbar onSubmit={this.handleQuery} />
        {this.state.error && <p>somthenig wrong. Try again</p>}
        {this.state.img.length > 0 ? (
          <ImageGallery>
            <ImageGalleryItem
              catchGrossImg={this.catchGrossImg}
              img={this.state.img}
            />
          </ImageGallery>
        ) : null}
        {this.state.isLoading && <Spiner />}
        {shoudBeVisibleLoadMoreButton && (
          <Button onClick={this.fetchPictures} />
        )}
      </div>
    );
  }
}

export default App;
