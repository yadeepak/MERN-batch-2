export function addBooks(book) {
  return {
    type: "ADD_BOOKS",
    payload: book,
  };
}

function deleteBooks(books) {
  return {
    type: "DELETE_BOOKS",
    payload: books,
  };
}
