const initialState = [
  {
    id: 0,
    name: "hi",
    number: 123456789,
    email: "r@g.com"
  },
  { id: 1, name: "va", number: 1234567890, email: "rs@g.com" }
];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filerContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filerContacts;
      return state;
    default:
      return state;
  }
};
export default contactReducer;
