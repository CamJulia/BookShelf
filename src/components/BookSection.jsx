// Sections READ - READING - TO READ - FOUND
import React from 'react';
import BookInfo from './BookInfo';

class BookSection extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
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