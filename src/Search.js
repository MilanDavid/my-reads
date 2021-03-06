import React from 'react'
import { Link } from 'react-router-dom'
import SingleBook from './SingleBook'

const Search = (props) => {

    const {
        searchBooks,
        searchResult,
        changeShelf
    } = props;

    return <div className="search-books">
        <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={(event) => { searchBooks(event.target.value) }} />
            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
                {
                    searchResult.length > 0 && searchResult.map((book, key) => (
                        <SingleBook book={book} key={key} changeShelf={changeShelf} />
                    ))
                }
            </ol>
        </div>
    </div>
}

export default Search;