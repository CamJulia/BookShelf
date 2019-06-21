import React from 'react'
import './App.css'
import SearchBooks from './components/SearchBooks';
import BooksAll from './components/BooksAll.jsx';
import * as BooksAPI from './BooksAPI';
import { Link, Route } from 'react-router-dom';

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      booksFound: [],
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  searchBooks = (term) => {
    BooksAPI.search(term).then(booksFound => {
      const filteredBooks = booksFound.filter(book => {
        const found = this.state.books.find(shelvedBook => {
          return shelvedBook.id === book.id;
        });

        if (found) return false;
        return true;
      });

      this.setState({ booksFound: filteredBooks });
    });
  }

  updateBook = async (book, shelf) => {
    if (shelf === book.shelf) return;

    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books });
      })
    });
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/search' render={() => (
          <SearchBooks updateBook={this.updateBook} booksFound={this.state.booksFound} searchBooks={this.searchBooks} />
        )} />

        <Route exact path='/' render={() => (
          <div>
            <BooksAll updateBook={this.updateBook} books={this.state.books} />
            <Link to='/search' className='open-search'>
              <button > Add a book</button>
            </Link>
          </div>
        )
        } />
      </div>)
  }
}

export default BooksApp
