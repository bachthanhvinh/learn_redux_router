import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartList() {
  const cart = useSelector((state) => state.CartReducer);

  return (
    <>
      {cart.map((item) => (
        <CartItem item={item} key={item.info.id} />
      ))}
    </>
  );
}
export default CartList;
