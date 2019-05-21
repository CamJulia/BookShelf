import React from 'react';
import BookSection from './BookSection';

class BooksAll extends React.Component {

  sortBooks = (shelf) => {
    return this.props.books.filter(book => book.shelf === shelf)
  }

  render() {
    if (!this.props.books.length) return null
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>bookshelf</h1>
        </div>
        <div className="list-books-content">
          <BookSection updateBook={this.props.updateBook} books={this.sortBooks('currentlyReading')} name="reading now" />
          <BookSection updateBook={this.props.updateBook} books={this.sortBooks('read')} name="read already" />
          <BookSection updateBook={this.props.updateBook} books={this.sortBooks('wantToRead')} name="to read soon" />
        </div>
      </div>
    )
  }
}

export default BooksAll;