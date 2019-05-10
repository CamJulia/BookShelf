// Shows Cover, author and title of the book.
import React from 'react';
import DDMove from './DDMove';

class BookInfo extends React.Component {
  render() {
    return (
<li>
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
      <DDMove />
    </div>
    <div className="book-title">Ender's Game</div>
    <div className="book-authors">Orson Scott Card</div>
  </div>
    </li> )}}

    export default BookInfo;