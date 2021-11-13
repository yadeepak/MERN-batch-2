import React from "react";
import BookDetails from "./BookDetails";
import { BookContext } from "../context/BookContext";
import { connect } from "react-redux";
import { addBooks } from "../../redux/actions";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      bookName: "",
      bookAuthor: "",
      bookDetails: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { bookDetails, bookAuthor, bookName } = this.state;

    const bookObj = {
      bookDetails,
      bookAuthor,
      bookName,
    };

    this.props.insertBook(bookObj);
    this.setState({
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
    const { bookDetails, bookAuthor, bookName } = this.state;
    console.log(this.props);
    return (
      <BookContext.Provider value={this.props.booksFromRedux}>
        <form onSubmit={this.handleSubmit}>
          Book name -{" "}
          <input type="text" onChange={this.bookChange} value={bookName} />{" "}
          <br />
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
          <textarea
            onChange={this.detailsChange}
            value={bookDetails}
          ></textarea>
          <br />
          <br />
          <button type="submit">Submit</button>
          <hr />
          <BookDetails />
        </form>
      </BookContext.Provider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertBook: (book) => dispatch(addBooks(book)),
  };
};

const mapStateToProps = (state) => {
  return {
    booksFromRedux: state,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
