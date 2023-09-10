import { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle';
import { AppStyled } from './App.styled';
import { ImageSearch } from './ImageSearch';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const img = await ImageSearch(searchQuery, page);

        setImages(prevImages => [...prevImages, ...img]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    fetchImages(searchQuery, page);
  }, [searchQuery, page]);

  const handleSearchFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const toggleModalImg = largeImageURL => {
    setLargeImageURL(largeImageURL);
    setShowModal(!showModal);
  };

  const handleButton = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <AppStyled>
      <Searchbar onSubmit={handleSearchFormSubmit}></Searchbar>
      {images.length > 0 && (
        <ImageGallery images={images} onClose={toggleModalImg}></ImageGallery>
      )}
      {showModal && (
        <Modal onClose={toggleModalImg} largeImageURL={largeImageURL} />
      )}
      {images.length > 0 && !isLoading && (
        <Button type="button" onClick={handleButton}></Button>
      )}
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
      <GlobalStyle></GlobalStyle>
    </AppStyled>
  );
};
