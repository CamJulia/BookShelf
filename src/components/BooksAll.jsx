import React from 'react';
import BookSection from './BookSection';
import ButtonAdd from './ButtonAdd';


class BooksAll extends React.Component {
  render() {
    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>bookshelves</h1>
        </div>
        <div className="list-books-content">
          <BookSection />
          <BookSection />
          <BookSection />
          <ButtonAdd/>
        </div>
        </div>
        )}}

export default BooksAll;