import React from "react";
import BookMoreDetails from "./BookMoreDetails";
import { connect } from "react-redux";
// export function BookDetails(props) {
//   // props.books => [{},{}]
//   const { books } = props;
//   console.log(books);
//   return (
//     <div>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Book name</th>
//             <th>Book author</th>
//             <th>Book Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.length > 0 &&
//             books.map((book, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{book.bookName}</td>
//                   <td>{book.bookAuthor}</td>
//                   <td>{book.bookDetails}</td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

class BookDetails extends React.PureComponent {
  render() {
    const { booksFromRedux = [] } = this.props;
    console.log(this.props);
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Book name</th>
              <th>Book author</th>
              <th>Book Details</th>
            </tr>
          </thead>
          <tbody>
            {booksFromRedux.length > 0 &&
              booksFromRedux.map((book, index) => {
                return (
                  <tr key={index}>
                    <td>{book.bookName}</td>
                    <td>{book.bookAuthor}</td>
                    <td>{book.bookDetails}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <BookMoreDetails />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const obj = { booksFromRedux: reduxState };
  return obj;
}
export default connect(mapStateToProps)(BookDetails);
