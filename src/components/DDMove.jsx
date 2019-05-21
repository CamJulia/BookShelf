// Dropdown to move book to READING, READ, TO READ.
import React from "react";

class DDMove extends React.Component {
  change = event => {
    console.log(event.target.value);
    const shelf = event.target.value;
    const { book } = this.props;
    this.props.updateBook(book, shelf);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select defaultValue={this.props.book.shelf} onChange={this.change}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">delete</option>
        </select>
      </div>
    );
  }
}

export default DDMove;
