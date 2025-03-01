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
export const cartDelete = (id) => {
  return {
    type: "DELETE__CART",
    id: id,
  };
};
export const cartDeleteAll = () => {
  return {
    type: "ALLDELETE__CART",
  };
};
