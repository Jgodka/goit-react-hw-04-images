import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import {
  SearchBarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      return toast.error('Please enter your search query');
    }
    onSubmit(value);
    event.target.reset();
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <SearchBarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <ImSearch />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </SearchForm>
      <Toaster position="top-right" />
    </SearchBarStyled>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
