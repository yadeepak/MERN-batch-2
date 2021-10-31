import React from "react";
import { BookDetails } from "./BookDetails";

class FormWithUncontrolled extends React.Component {
  bookName;
  constructor() {
    super();
    this.state = {
      bookArray: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { bookArray } = this.state;
    console.log("submit", this.bookName.value);
    this.bookName.value = "";
    // const bookObj = {
    //   bookDetails,
    //   bookAuthor,
    //   bookName,
    // };

    // const bookArrayClone = [...bookArray];
    // bookArrayClone.push(bookObj);

    // this.setState({
    //   bookArray: bookArrayClone,
    // });
  };
  //   bookNameRef = (ref) => {
  //     this.bookName = ref;
  //   };

  componentDidMount() {
    console.log("cdm", this.bookName);
    this.bookName.focus();
    this.bookName.value = "dkfkb";
  }

  render() {
    console.log("render", this.bookName);
    const { bookDetails, bookAuthor, bookName, bookArray } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        Book name -{" "}
        <input type="text" ref={(refernce) => (this.bookName = refernce)} />{" "}
        <br />
        <br />
        Book author - <input type="text" /> <br />
        <br />
        Book Details - <textarea></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
        <hr />
        <BookDetails books={bookArray} />
      </form>
    );
  }
}

export default FormWithUncontrolled;
