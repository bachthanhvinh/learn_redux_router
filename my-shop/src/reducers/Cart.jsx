function CartReducer(state = [], action) {
  const newState = [...state];
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
    default:
      return state;
  }
}
export default CartReducer;
