import React from 'react'
import SingleBook from './SingleBook'

const MyReads = (props) => {

    const {
        allBooks,
        changeShelf
    } = props;

    return <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                allBooks.filter((book) => (book.shelf === "currentlyReading" && book)).map((book, key) => (
                                    <SingleBook key={key} book={book} changeShelf={changeShelf} />
                                ))
                            }
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                allBooks.filter((book) => (book.shelf === "wantToRead" && book)).map((book, key) => (
                                    <SingleBook key={key} book={book} changeShelf={changeShelf} />
                                ))
                            }
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                allBooks.filter((book) => (book.shelf === "read" && book)).map((book, key) => (
                                    <SingleBook key={key} book={book} changeShelf={changeShelf} />
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MyReads;