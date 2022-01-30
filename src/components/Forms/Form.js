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
    const { data } = await axios.post("http://localhost:3002/addbook", bookObj);
    if (data.success) {
      this.props.insertBook(bookObj);
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

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { bookDetails, bookAuthor, bookName } = this.state;
    // console.log(this.props);
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
