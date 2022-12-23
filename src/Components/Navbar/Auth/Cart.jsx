import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_cart_item } from "../../../Redux/Data/Action";
import { useNavigate } from "react-router-dom";
import { AiOutlineGift } from "react-icons/ai";
import Styles from "./Cart.module.css";
import ReviewOrder from "./ReviewOrder/ReviewOrder";


const Cart = () => {
  const data = useSelector((state) => state.Data.cartData);
  const length = data.length;
  const dispatch = useDispatch();
 

  return (
    <div className={Styles.div__1}>
      <div>
        <div className={Styles.mainContainer}>
          <div className={Styles.shop}>
            <h6 className={Styles.shoppingBag}>Shopping Bag ({length})</h6>
          </div>
          <div className={Styles.saveIt}>
            <p className={Styles.saveLater}>Save For Later (0)</p>
          </div>
        </div>

        <div>
          <h4 className={Styles.bagShop}>Shopping Bag</h4>
          <p>Items in your bag are not on hold.</p>
          <p>
            <label>
              <AiOutlineGift />
            </label>
            Choose gift options when you check out.
          </p>
          <p>
            Free Shipping on Orders over $89 for a limited time or free ship to
            U.S. stores.Learn more.{" "}
          </p>
        </div>
      </div>

      <div className={Styles.div__2}>
        {data.map((item) => {
          return (
            <div className={Styles.div__3} key={nanoid()}>
              <div className={Styles.mainImage}>
                <img
                  className={Styles.image}
                  src={item.thumbnail}
                  alt="wrong src"
                />
              </div>
              <div className={Styles.title}>
                <p>{item.title}</p>
                <div className={Styles.subTitle}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-truck"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                  <div>
                    Delivery <p className={Styles.date}>Thu, 5/12–Wed, 5/18</p>{" "}
                  </div>
                </div>

                <button
                  className={Styles.removeBtn}
                  onClick={() => {
                    remove_cart_item(dispatch, item);
                  }}
                >
                  Remove
                </button>
                <button className={Styles.saveBtn}>Save for later</button>
              </div>
              <div className={Styles.qty} >
                <select>
                  <option value="">Qty</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className={Styles.price} >
                <p>Price :{item.price.raw}</p>
              </div>
            </div>
          );
        })}
      </div>
        <ReviewOrder />
     
    </div>
  );
};

export default Cart;
