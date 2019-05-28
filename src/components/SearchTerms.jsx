// Shows search term.
import React from "react";
// import { search } from '../BooksAPI.js';
import * as BooksAPI from "../BooksAPI";

const searchTerms = [
  "Android",
  "Art",
  "Artificial Intelligence",
  "Astronomy",
  "Austen",
  "Baseball",
  "Basketball",
  "Bhagat",
  "Biography",
  "Brief",
  "Business",
  "Camus",
  "Cervantes",
  "Christie",
  "Classics",
  "Comics",
  "Cook",
  "Cricket",
  "Cycling",
  "Desai",
  "Design",
  "Development",
  "Digital Marketing",
  "Drama",
  "Drawing",
  "Dumas",
  "Education",
  "Everything",
  "Fantasy",
  "Film",
  "Finance",
  "First",
  "Fitness",
  "Football",
  "Future",
  "Games",
  "Gandhi",
  "Homer",
  "Horror",
  "Hugo",
  "Ibsen",
  "Journey",
  "Kafka",
  "King",
  "Lahiri",
  "Larsson",
  "Learn",
  "Literary Fiction",
  "Make",
  "Manage",
  "Marquez",
  "Money",
  "Mystery",
  "Negotiate",
  "Painting",
  "Philosophy",
  "Photography",
  "Poetry",
  "Production",
  "Programming",
  "React",
  "Redux",
  "River",
  "Robotics",
  "Rowling",
  "Satire",
  "Science Fiction",
  "Shakespeare",
  "Singh",
  "Swimming",
  "Tale",
  "Thrun",
  "Time",
  "Tolstoy",
  "Travel",
  "Ultimate",
  "Virtual Reality",
  "Web Development",
  "iOS"
];

const handleClick = () => {
  console.log('this is:', this);
}

const terms = searchTerms.map(term => (
  <button key={term} className="search-term" onClick={handleClick}>
    {term}
  </button>
));

//  const booksFound = () => {
//   // await BooksAPI.search(term);
//   console.log('Hello')
//   const books = BooksAPI.search(this);
//   console.log (books);
// };

class SearchTerms extends React.Component {
  render() {
    return <div className="search-terms">{terms}</div>;
  }
}

export default SearchTerms;
