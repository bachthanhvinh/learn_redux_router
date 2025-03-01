import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function CartMini(props) {
  const { item } = props;
  const cart = useSelector((state) => state.CartReducer);
  const total = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  console.log(total);
  return (
    <>
      <NavLink className={item} to="cart">
        Cart ({total})
      </NavLink>
    </>
  );
}

export default CartMini;
