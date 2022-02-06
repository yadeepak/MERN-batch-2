import React from "react";
import BookDetails from "./BookDetails";
import { BookContext } from "../context/BookContext";
import { connect } from "react-redux";
import { addBooks, initBooks } from "../../redux/actions";
import BookNameWithHooks from "./BookNameWithHooks";
import axios from "axios";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      bookName: "",
      bookAuthor: "",
      bookDetails: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { bookDetails, bookAuthor, bookName } = this.state;
    if (!bookName) {
      alert("bookname is required");
      return;
    }
    const bookObj = {
      bookDetails,
      bookAuthor,
      bookName,
    };

    const bookId = this.props.location.state?.bookId;
    if (bookId) {
      //edit part
      this.updateBookDetails(bookObj, bookId);
    } else {
      this.addBookInDb(bookObj);
    }
  };

  updateBookDetails = async (bookObj, bookId) => {
    const { data } = await axios.put(
      `http://localhost:3002/updateBookById/${bookId}`,
      bookObj
    );
    console.log(data, "updated");
  };

  addBookInDb = async (bookObj) => {
    if (this.props.booksFromRedux.length === 0) {
      const { data } = await axios.get("http://localhost:3002/getbooks");
      if (data) {
        this.props.initBooks(data);
      }
    }

    const { data } = await axios.post("http://localhost:3002/addbook", bookObj);
    if (data.success) {
      this.props.insertBook(data.addedData); //redux insert
      this.setState({
        bookName: "",
        bookAuthor: "",
        bookDetails: "",
      });
    } else {
      alert(data.message);
    }
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

  async componentDidMount() {
    const bookId = this.props.location.state?.bookId;
    if (bookId) {
      //api call
      const { data } = await axios.get(
        "http://localhost:3002/getBookById/" + bookId
      );
      delete data._id;
      this.setState(data);
    }
  }

  render() {
    const { bookDetails, bookAuthor, bookName } = this.state;
    console.log(this.state);
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
          {/* <BookNameWithHooks /> */}
        </form>
      </BookContext.Provider>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertBook: (book) => dispatch(addBooks(book)),
    initBooks: (books) => dispatch(initBooks(books)),
  };
};

const mapStateToProps = (state) => {
  return {
    booksFromRedux: state,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
