// Shows Cover, author and title of the book.
import React from 'react';
import DDMove from './DDMove';

class BookInfo extends React.Component {
render() {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: this.props.book.imageLinks.thumbnail }}></div>
          <DDMove />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    </li>)
}}


export default BookInfo;