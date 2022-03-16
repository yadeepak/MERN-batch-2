import React, { useEffect } from "react";
import BookMoreDetails from "./BookMoreDetails";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { initBooks, deleteBook } from "../../redux/actions";
import { useHistory } from "react-router-dom";
export function BookDetails(props) {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    books.length === 0 && fetchData();
  }, []);

  const fetchData = async () => {
    console.log("api call");
    const { data } = await axios.get("http://localhost:3022/getbooks");
    if (data) {
      dispatch(initBooks(data));
    }
  };
  console.log(books);

  const onDelete = async (bookId) => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this row"
    );
    if (isConfirm) {
      const { data } = await axios.delete(
        `http://localhost:3022/delete/${bookId}`
      );
      if (data && data.success) {
        dispatch(deleteBook(bookId));
        return;
      }

      alert("Row can not be deleted");
    }
  };

  const onEdit = (bookId) => {
    history.push("book/edit", { bookId });
  };

  return (
    <div>
      <table border="1" className="table">
        <thead>
          <tr>
            <th>Book name</th>
            <th>Book author</th>
            <th>Book Details</th>
            <th>Book image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 &&
            books.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book.bookName}</td>
                  <td>{book.bookAuthor}</td>
                  <td>{book.bookDetails}</td>
                  <td>
                    <img
                      src={"http://localhost:3022/uploads/" + book.image}
                      width="200"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(book._id)}
                    >
                      Delete
                    </button>{" "}
                    |
                    <button
                      className="btn btn-success"
                      onClick={() => onEdit(book._id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

// class BookDetails extends React.PureComponent {
//   async componentDidMount() {
//     const { data } = await axios.get("http://localhost:3002/getbooks");
//     if (data) {
//       this.props.initBooks(data);
//     }
//   }
//   render() {
//     const { booksFromRedux = [] } = this.props;
//     console.log(this.props);
//     return (
//       <div>
//         <table border="1" className="table">
//           <thead>
//             <tr>
//               <th>Book name</th>
//               <th>Book author</th>
//               <th>Book Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {booksFromRedux.length > 0 &&
//               booksFromRedux.map((book, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{book.bookName}</td>
//                     <td>{book.bookAuthor}</td>
//                     <td>{book.bookDetails}</td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//         {/* <BookMoreDetails /> */}
//       </div>
//     );
//   }
// }

// function mapStateToProps(reduxState) {
//   const obj = { booksFromRedux: reduxState };
//   return obj;
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     initBooks: (books) => dispatch(initBooks(books)),
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);

export default BookDetails;
