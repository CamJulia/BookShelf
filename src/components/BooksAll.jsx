import React from 'react';
import BookSection from './BookSection';


class BooksAll extends React.Component {
  render() {
    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>bookshelf</h1>
        </div>
        <div className="list-books-content">
          <BookSection name="reading now"/>
          <BookSection name="read already"/>
          <BookSection name="to read soon"/>
        </div>
        </div>
        )}}

export default BooksAll;