import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    input: '',
  };
  handleInput = e => {
    this.setState({ input: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleInput}
            className="SearchForm-input"
            type="text"
            value={this.state.input}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
