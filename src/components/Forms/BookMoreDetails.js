import React from "react";
import { BookContext } from "../context/BookContext";
function BookMoreDetails() {
  return (
    <BookContext.Consumer>
      {(data) => (
        <div>
          {data.length > 0 &&
            data.map((book, index) => {
              return <h1>{book.bookName}</h1>;
            })}
        </div>
      )}
    </BookContext.Consumer>
  );
}
export default BookMoreDetails;
