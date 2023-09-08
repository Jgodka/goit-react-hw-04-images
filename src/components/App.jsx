import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle';
import { AppStyled } from './App.styled';
import { ImageSearch } from './ImageSearch';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    largeImageUrl: '',
    error: false,
    isLoading: false,
    showModal: false,
    shouldScroll: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  };

  fetchImages = async () => {
    try {
      const { searchQuery, page } = this.state;
      this.setState({ isLoading: true });
      const img = await ImageSearch(searchQuery, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...img],
        isLoading: false,
        error: false,
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
    }
  };

  handleSearchFormSubmit = query => {
    if (this.state.searchQuery !== query) {
      this.setState({
        searchQuery: query,
        page: 1,
        images: [],
      });
    }
  };

  toggleModalImg = largeImageUrl => {
    this.setState({ largeImageUrl: largeImageUrl });
    this.setState({ shouldScroll: false });
    this.setState({ showModal: !this.state.showModal });
  };

  handleButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, error, showModal, largeImageUrl } = this.state;

    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSearchFormSubmit}></Searchbar>
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onClose={this.toggleModalImg}
          ></ImageGallery>
        )}
        {showModal && (
          <Modal onClose={this.toggleModalImg} largeImageUrl={largeImageUrl} />
        )}
        {images.length > 0 && !isLoading && (
          <Button type="button" onClick={this.handleButton}></Button>
        )}
        {isLoading && <Loader />}
        {error && <p>Something went wrong</p>}
        <GlobalStyle></GlobalStyle>
      </AppStyled>
    );
  }
}
