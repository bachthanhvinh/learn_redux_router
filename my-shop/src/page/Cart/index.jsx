import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { cartDeleteAll } from "../../actions";

function Cart() {
  const cart = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  // console.log(cart);
  const totalPrice = cart.reduce((sum, item) => {
    const newPrice =
      (item.info.price * (100 - item.info.discountPercentage)) / 100;
    return sum + newPrice * item.quantity;
  }, 0);

  const handleDeleteAll = () => {
    dispatch(cartDeleteAll());
  };
  return (
    <>
      {cart.length > 0 ? (
        <div>
          <div className="cart__allCart">
            <div>Giỏ hàng</div>
            <button onClick={handleDeleteAll} className="cart__deleteAll">
              Xóa tất cả
            </button>
          </div>
          <CartList />
          <div className="cart__totalPrice">
            Tổng tiền: <span>{totalPrice.toFixed(2)}$</span>
          </div>
        </div>
      ) : (
        <div>không có sản phẩm</div>
      )}
    </>
  );
}

export default Cart;
