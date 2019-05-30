import React from 'react';
import BookInfo from './BookInfo';


class BooksFound extends React.Component {
    constructor() {
        super();
        this.state = {
          booksFound: [],
        }
      }

  render() {
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">books found</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state.booksFound.map((book) => {
              return <BookInfo updateBook={this.state.updateBook} key={book.id} book={book} />
            })}
          </ol>
        </div>
      </div>)
  }
}

export default BooksFound;