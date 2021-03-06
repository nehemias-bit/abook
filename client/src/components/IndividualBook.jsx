import React, { Component } from 'react';
import LoggedInHeader from './LoggedInHeader';
import { Link } from 'react-router-dom';



export default class IndividualBook extends Component {
  debugger
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  async componentDidMount() {
    await this.props.getCurrentBook(this.props.id);
    await this.props.updateBookIsFinished
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.currentBook && this.props.currentUser &&
          <>
          <LoggedInHeader handleLogout={this.props.handleLogout} currentUser={this.props.currentUser}/> 
          <div>
            <div id="individual-book-title-author">
              <h3>{this.props.currentBook.author_name}:</h3>
              <p>{this.props.currentBook.book_title}</p>
            </div>  
            <div id="cover-notes-section">
              <div id="individual-book-cover">
                <img src={this.props.currentBook.book_cover} alt="book cover" />
                <div id="individual-book-cover-buttons">
                <button id="delete-book" onClick={() => (this.props.deleteTheBook(this.props.id))}>Delete </button>
                <Link to={`/books/${this.props.id}/update`}><button id="update-book" style={{display: this.props.currentBook.finished === true ? 'none' : 'inline-block' }}>Update</button></Link>
                <button style={{display: this.props.currentBook.finished === true ? 'none' : 'block' }} onClick={this.props.updateBookIsFinished} id="finished-button">Finished</button>
                </div>  
              </div>
            <div id="notes">
              <Link to={`/books/${this.props.id}/add-note`}><button id="add-note">Add Notes</button></Link>
              {
                this.props.currentBook.notes && this.props.currentBook.notes.map(each => (
                  <>
                   <p>{each.note}</p>
                   <button onClick={() => (this.props.deleteNote(each.id))} id="delete-note">discard</button>
                  </>   
                  )) 
                }
            </div>
            </div>
          </div>
          </>
        }
      </React.Fragment>  
    )
  }
}
