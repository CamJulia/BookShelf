import React from 'react';
import SearchTerms from './SearchTerms';


class SearchBooks extends React.Component {

  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={this.props.closeSearch}>Close</button>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <SearchTerms />
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks