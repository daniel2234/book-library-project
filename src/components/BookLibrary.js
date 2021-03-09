import React from 'react';
import Book from '../components/Book';
import Seed from '../js/seed.js';

class BookLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    this.setState({books: Seed})
  }

  getBookID(bookID) {
    console.log(bookID + ' was clicked on.');
  }
  render(){

    const books = Seed.sort((a,b) => (
      new Date(b.lastRead) - new Date(a.lastRead)
    ));

    const bookComponents = Seed.map((book) => (
      <Book 
      key={'book-' + book.id}
      id={book.id}
      title={book.title}
      author={book.author}
      pages={book.pages}
      pagesRead={book.pagesRead}
      currentBook={this.getBookID}
      />
    ))
    return (
      <div>
        {bookComponents}
      </div>
    )
  }
}

export default BookLibrary;


