import React from 'react';
import BookInfo from './BookInfo';

class BookSection extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <BookInfo />
            <BookInfo />
          </ol>
        </div>
      </div>)
  }
}

export default BookSection;