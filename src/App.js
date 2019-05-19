import React from 'react'
import './App.css'
import SearchBooks from './components/SearchBooks';
import BooksAll from './components/BooksAll.jsx';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
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
    console.log('++++ I mount!');
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  componentDidUpdate() {
    console.log('==== I update!');
  }

  closeSearch = () => {
    this.setState({ showSearchPage: false });
  }


  render() {
    console.log('>>>> I render, current state is: ', this.state)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks closeSearch={this.closeSearch} />
        ) : (
            this.state.books.length ? (
                <BooksAll books={this.state.books} />
              )
                :
                (<p>loading...</p>)
          )
        }
        <div>

        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>)
  }
}

export default BooksApp;
