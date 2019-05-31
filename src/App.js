import React from 'react'
import './App.css'
import SearchBooks from './components/SearchBooks';
import BooksAll from './components/BooksAll.jsx';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      booksFound: [],
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  searchBooks = (term) => {
    BooksAPI.search(term).then(booksFound => this.setState({ booksFound }));
  }

  closeSearch = () => {
    this.setState({ showSearchPage: false });
  }

  updateBook = async (book, shelf) => {
    if (shelf === book.shelf) return;

    await BooksAPI.update(book, shelf)

    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Route exact path='/add' render={() => (
            <SearchBooks updateBook={this.updateBook} booksFound={this.state.booksFound} searchBooks={this.searchBooks} closeSearch={this.closeSearch} />
          )} />) : (
            this.state.books.length ? (
              <Route exact path='/' render={() => (
                <BooksAll updateBook={this.updateBook} books={this.state.books} />
              )} />)
              :
              (<p>Go and read a book while I'm loading...</p>)
          )
        }
        <div>
        </div>

        {this.state.showSearchPage || <Link to='/add' className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </Link>}
      </div>)
  }
}

export default BooksApp;
