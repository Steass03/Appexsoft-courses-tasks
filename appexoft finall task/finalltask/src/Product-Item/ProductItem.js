import "./ProductItem.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../CartLogic/CartLogic";

export function ProductItem() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="row">
        {items.map((item) => (
          <div className="card-item">
            <div className="column" key={item.id}>
              <img className="pict" variant="top" src={item.imgUrl} alt="img" />
              <div className="card-body">
                <span className="phone-name">{item.name}</span>
                <span className="phone-price">{item.price}</span>
                <button
                  className="addToCartBTN"
                  onClick={() => dispatch(addToCart(item))}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
