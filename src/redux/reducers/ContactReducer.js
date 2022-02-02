const initialState = [
  {
    id: 0,
    name: "hi",
    number: 123456789,
    email: "r@g.com"
  },
  { id: 1, name: "hi", number: 1234567890, email: "rs@g.com" }
];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
export default contactReducer;
