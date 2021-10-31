import React from "react";

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

export class BookDetails extends React.PureComponent {
  render() {
    const { books } = this.props;
    console.log(books);
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
            {books.length > 0 &&
              books.map((book, index) => {
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
      </div>
    );
  }
}
