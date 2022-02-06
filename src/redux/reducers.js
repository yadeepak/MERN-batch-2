export const initialState = [];

function bookReducer(state = initialState, action) {
  if (action.type === "ADD_BOOKS") {
    const stateClone = [...state];
    stateClone.push(action.payload);
    return stateClone;
  }
  if (action.type === "INIT_BOOKS") {
    return action.payload;
  }

  if (action.type === "DELETE_BOOK") {
    const stateClone = [...state];
    const filterdBooks = stateClone.filter(
      (book) => book._id !== action.payload
    );
    return filterdBooks;
  }
  return state;
}

export default bookReducer;
