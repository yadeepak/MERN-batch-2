import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
function BookMoreDetails() {
  const data = useContext(BookContext);
  return (
    <div>
      {data.length > 0 &&
        data.map((book, index) => {
          return <h1>{book.bookName}</h1>;
        })}
    </div>
  );
}
export default BookMoreDetails;
