// Shows Cover, author and title of the book.
import React from 'react';
import DDMove from './DDMove';
import defaultCover from '../icons/defaultCover.png';

class BookInfo extends React.Component {
  render() {

    const bookCover = this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : defaultCover;
    return (
      <li>
        <div className="book" key={this.props.book.id} >
          <div className="book-top">
            <div className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url(${bookCover})`
              }}>
            </div>
            <DDMove updateBook={this.props.updateBook} book={this.props.book} />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>)
  }
}


export default BookInfo;