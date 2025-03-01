import { FaTrash } from "react-icons/fa6";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { cartDelete, updateCartProduct } from "../../actions";
function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const inputRef = useRef();

  const newPrice =
    (item.info.price * (100 - item.info.discountPercentage)) / 100;

  const handleUp = () => {
    inputRef.current.value = item.quantity + 1;
    dispatch(updateCartProduct(item.id, 1));
  };
  const handleDown = () => {
    if (item.quantity > 1) {
      inputRef.current.value = item.quantity - 1;
      dispatch(updateCartProduct(item.id, -1));
    }
  };
  const handleDelete = () => {
    dispatch(cartDelete(item.id));
  };

  return (
    <>
      <div className="cart">
        <div className="cart__list">
          <div className="cart__image">
            <img src={item.info.thumbnail} alt={item.info.title} />
          </div>
          <div className="cart__item">
            <div className="cart__title">{item.info.title}</div>
            <div className="cart__newPrice">{newPrice.toFixed(2)}$</div>
            <div className="cart__oldPrice">{item.info.price}$</div>
          </div>
        </div>
        <div className="cart__btn">
          <button onClick={handleDown} className="cart__btn--down">
            -
          </button>
          <input
            ref={inputRef}
            className="ipCart"
            type="text"
            defaultValue={item.quantity}
          />

          <button onClick={handleUp} className="cart__btn--up">
            +
          </button>
          <button onClick={handleDelete} className="cart__btn--delete">
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
}
export default CartItem;
