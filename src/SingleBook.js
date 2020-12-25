import React from 'react'
import PropType from 'prop-types';

const SingleBook = (props) => {

    return <li>
        <div className="book">
            <div className="book-top">
                {
                    props.book.imageLinks
                        ? <div
                            className="book-cover" style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${props.book.imageLinks.thumbnail})`
                            }}></div>
                        : <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundColor: 'gray'
                            }}></div>
                }
                <div className="book-shelf-changer">
                    <select onChange={(event) => props.changeShelf(props.book, event.target.value)} defaultValue="move">
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors && props.book.authors.map(auth => auth)}</div>
        </div>
    </li>
}

SingleBook.propTypes = {
    book: PropType.object.isRequired,
    changeShelf: PropType.func.isRequired
}

export default SingleBook;