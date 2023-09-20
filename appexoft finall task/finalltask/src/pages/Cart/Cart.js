import "./Cart.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../CartLogic/CartLogic";

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="Cart">
      <div className="marginCart">
        <div>
          <div className="LeftPart">
            <div className="Top">
              <h1 className="Title">Cart - {cart.length} items</h1>
            </div>
            <div className="line"></div>
            {cart?.map((data) => (
              <div className="midle">
                <img className="img" src={data.imgUrl} alt="productImg" />
                <div className="midlepart">
                  <div className="midlePad">
                    <h2 className="phoneName">{data.name}</h2>
                    <button
                      className="backetBTN"
                      onClick={() => dispatch(removeItem(data.id))}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        width="30px"
                        height="30px"
                      >
                        <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="rightpart">
                  <div className="upperpart">
                    <button
                      className="minusbtn"
                      onClick={() => dispatch(decreaseItemQuantity(data.id))}
                    >
                      -
                    </button>
                    <div className="quantityPad">
                      <p className="quantity">{data.quantity}</p>
                    </div>
                    <button
                      className="plusbtn"
                      onClick={() => dispatch(increaseItemQuantity(data.id))}
                    >
                      +
                    </button>
                  </div>
                  <p className="price">{data.price}</p>
                </div>
              </div>
            ))}
            <div className="Line"></div>
          </div>
        </div>
        <div>
          <div className="RightPart">
            <div className="top">
              <h1 className="Title">Summary</h1>
            </div>
            <div className="line" />
            <div className="body">
              <div className="totalQuantitys">
                <h3 className="total">Total Quantity</h3>
                <h3 className="total">{totalQuantity}</h3>
              </div>
              <div className="totalAmount">
                <h3 className="totalprice">Total amount</h3>
                <h3 className="totalprice">{totalPrice}</h3>
              </div>
            </div>
            <button className="GoToCheckoutBTN">GO TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
