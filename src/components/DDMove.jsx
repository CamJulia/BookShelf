// Dropdown to move book to READING, READ, TO READ.
import React from 'react';

class DDMove extends React.Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">delete</option>
        </select>
      </div>)
  }
}

export default DDMove;