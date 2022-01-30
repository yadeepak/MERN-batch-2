import React, { useReducer } from "react";
import { BookContext } from "../context/BookContext";
import bookReducer, { initialState } from "../../redux/reducers";
function BookNameWithHooks() {
  const [state, dispatch] = useReducer(bookReducer, initialState);
  console.log(state);
  return (
    <div>
      {state.length > 0 &&
        state.map((book, index) => {
          return <h1>Hooks {book.bookName}</h1>;
        })}
    </div>
  );
}
export default BookNameWithHooks;
