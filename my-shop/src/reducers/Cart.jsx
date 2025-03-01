function CartReducer(state = [], action) {
  let newState = [...state];
  switch (action.type) {
    case "ADD__CART":
      return [
        ...state,
        {
          id: action.id,
          info: action.info,
          quantity: 1,
        },
      ];
    case "UPDATE__CART":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + action.quantity }
          : item
      );
    case "DELETE__CART":
      newState = newState.filter((item) => item.id !== action.id);
      return newState;
    case "ALLDELETE__CART":
      return [];
    default:
      return state;
  }
}
export default CartReducer;
