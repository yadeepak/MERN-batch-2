export function addBooks(book) {
  return {
    type: "ADD_BOOKS",
    payload: book,
  };
}

export function initBooks(books) {
  return {
    type: "INIT_BOOKS",
    payload: books,
  };
}

export function deleteBook(bookId) {
  return {
    type: "DELETE_BOOK",
    payload: bookId,
  };
}
