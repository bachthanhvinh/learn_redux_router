export const addCartProduct = (id, info) => {
  return {
    type: "ADD__CART",
    id: id,
    info: info,
  };
};
export const updateCartProduct = (id, quantity = 1) => {
  return {
    type: "UPDATE__CART",
    id: id,
    quantity: quantity,
  };
};
