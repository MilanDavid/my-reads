import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import MyReads from './MyReads'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    allBooks: [],
    searchResult: []
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then(res => {
        this.setState({ allBooks: res });
      })
  }

  changeShelf = (book, shelf) => {
    if (shelf) {
      BooksAPI.update(book, shelf)
        .then(res => {
          this.getAllBooks();
        })
    }
  }

  searchBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query.trim())
        .then(res => {
          if (res.length > 0) {
            this.setState({ searchResult: res })
          } else {
            this.setState({ searchResult: [] })
          }
        })
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <MyReads allBooks={this.state.allBooks} changeShelf={this.changeShelf} />} />
        <Route path="/search" render={() => <Search searchBooks={this.searchBooks} searchResult={this.state.searchResult} changeShelf={this.changeShelf} />} />

        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
