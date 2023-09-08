import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import {
  SearchBarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value.trim() === '') {
      toast.error('Please enter your search query');
      return;
    }
    this.props.onSubmit(this.state.value);
    event.target.reset();
  };

  render() {
    return (
      <SearchBarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <ImSearch />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
        <Toaster position="top-right" />
      </SearchBarStyled>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
