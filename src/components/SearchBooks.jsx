import React from 'react';
import SearchTerms from './SearchTerms';
import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import BookSection from './BookSection';


class SearchBooks extends React.Component {

  state = {
    query: ''
  };

  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });
    this.props.searchBooks(query);
  }
  render() {
    console.log(this.props)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link exact to='/'><button className="close-search" onClick={this.props.closeSearch}>Close</button></Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              onChange={this.getBooks} />
          </div>
        </div>
        <SearchTerms updateBook={this.props.updateBook} booksFound={this.props.booksFound} searchBooks={this.props.searchBooks} />
        <BookSection books={this.props.booksFound} updateBook={this.props.updateBook} name="BOOKS FOUND" />
      </div>
    )
  }
}

export default SearchBooks