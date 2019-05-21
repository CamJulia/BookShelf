import React from 'react';
import BookInfo from './BookInfo';

class BookSection extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name} ({this.props.books.length} books)</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => {
              return <BookInfo updateBook={this.props.updateBook} key={book.id} book={book} />
            })}

          </ol>
        </div>
      </div>)
  }
}

export default BookSection;