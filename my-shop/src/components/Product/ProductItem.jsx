import { useDispatch, useSelector } from "react-redux";
import "./ProductItem.scss";
import { addCartProduct, updateCartProduct } from "../../actions";

function ProductItem(props) {
  const { item } = props;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.CartReducer);

  const handleAddCart = () => {
    if (cart.some((itemCart) => itemCart.id === item.id)) {
      dispatch(updateCartProduct(item.id));
    } else {
      dispatch(addCartProduct(item.id, item));
    }
  };
  return (
    <>
      <div className="product__item">
        <div className="product__image">
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className="product__title">{item.title}</div>
        <div className="product__quantity">
          <div className="product__newPrice">
            {((item.price * (100 - item.discountPercentage)) / 100).toFixed(2)}$
          </div>
          <div className="product__oldPrice">{item.price}$</div>
          <div className="product__discountPc">{item.discountPercentage}%</div>
          <button onClick={handleAddCart} className="btn__add">
            Mua sản phẩm
          </button>
        </div>
      </div>
    </>
  );
}
export default ProductItem;
