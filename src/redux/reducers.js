const initialState = [
  {
    bookDetails: "book1",
    bookAuthor: "author1",
    bookName: "bname1",
  },
];
function bookReducer(state = initialState, action) {
  if (action.type === "ADD_BOOKS") {
    const stateClone = [...state];
    stateClone.push(action.payload);
    state = stateClone;
  }
  return state;
}

export default bookReducer;
