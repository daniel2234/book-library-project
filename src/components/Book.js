import React from 'react';
import '../css/book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.handleBookID = this.handleBookID.bind(this);
  }
  handleBookID() {
    this.props.currentBook(this.props.id)
  }

  render() {
    // console.log(this);
    return (
      <div className='book'>
        <div className='info'>
          <div className='title'>
            <button onClick={this.handleBookID}>this.handleBookID()</button>
            <h6>Title</h6>
          </div>
          <div className='author'>
            <h6>Author</h6>
          </div>
          <div className='pages'>
            <h6>Pages</h6>
          </div>
          <div className='pages-read'>
            <h6>Pages Read</h6>
          </div>
          <div className='title-user-input'>
            <h6>{this.props.title}</h6>
          </div>
          <div className='author-user-input'>
            <h6>{this.props.author}</h6>
          </div>
          <div className='pages-user-input'>
            <h6>{this.props.pages}</h6>
          </div>
          <div className='pages-read-user-input'>
          <h6>{this.props.pagesRead}</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default Book;