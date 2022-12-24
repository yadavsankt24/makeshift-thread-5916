import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./ReviewOrder.module.css";

const ReviewOrder = () => {
  const data = useSelector((state) => state.Data.cartData);
  const navigate = useNavigate();
  var total = 0;
  var shipping = 199;
  for (var i = 0; i < data.length; i++) {
    total = total + Number(data[i].price.extracted);
    // shipping = shipping+ Number(sampledata[i].shipping)
  }
  var final = total + shipping + 14;

  const payment = () => {
    navigate("/checkout");
  };
  return (
    <div className={styles.review1}>
      <div className={styles.review12}>
        <p className={styles.size}> Review order</p>

        <div className={styles.flexs}>
          <p>Your items</p>
          <p>$ {total}</p>
        </div>

        <div className={styles.flexs}>
          <p>Shipping</p>
          <p>$ {shipping}</p>
        </div>

        <div className={styles.flexs}>
          <p>Estimated tax</p>
          <p>$ 14</p>
        </div>

        <div className={styles.line}></div>

        <div className={styles.flexs}>
          <p>Estimated total</p>
          <p>$ {final}</p>
        </div>

        <button onClick={payment} className={styles.reviewButton}>
          Review Order
        </button>
      </div>
    </div>
  );
};

export default ReviewOrder;
