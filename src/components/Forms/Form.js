import React from "react";
import { BookDetails } from "./BookDetails";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      bookName: "",
      bookAuthor: "",
      bookDetails: "",
      bookArray: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { bookDetails, bookAuthor, bookName, bookArray } = this.state;

    const bookObj = {
      bookDetails,
      bookAuthor,
      bookName,
    };

    const bookArrayClone = [...bookArray];
    bookArrayClone.push(bookObj);

    this.setState({
      bookArray: bookArrayClone,
      bookName: "",
      bookAuthor: "",
      bookDetails: "",
    });
  };

  bookChange = (event) => {
    const bookName = event.target.value;
    this.setState({ bookName });
  };
  authorChange = (event) => {
    const bookAuthor = event.target.value;
    this.setState({ bookAuthor });
  };
  detailsChange = (event) => {
    const bookDetails = event.target.value;
    this.setState({ bookDetails });
  };
  render() {
    const { bookDetails, bookAuthor, bookName, bookArray } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        Book name -{" "}
        <input type="text" onChange={this.bookChange} value={bookName} /> <br />
        <br />
        Book author -{" "}
        <input
          type="text"
          onChange={this.authorChange}
          value={bookAuthor}
        />{" "}
        <br />
        <br />
        Book Details -{" "}
        <textarea onChange={this.detailsChange} value={bookDetails}></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
        <hr />
        <BookDetails books={bookArray} />
      </form>
    );
  }
}

export default Form;
