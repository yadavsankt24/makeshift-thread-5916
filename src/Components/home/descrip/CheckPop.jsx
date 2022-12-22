import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./descpage.module.css";
import { Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { add_to_bag } from "../../../Redux/Data/Action";
import { BsFillBagFill } from "react-icons/bs";
import Checkoutcarousel from "./Checkoutcarousel";

export function CheckPop({ data }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // send Data to cart page>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const sendData = (payload) => {
    add_to_bag(dispatch, payload);
  };

  const sendToCart = () => {
    navigate("/checkout");
  };
  // send Data to cart page ends >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <div>
      <Button
        className={styles.addbag}
        variant="primary"
        onClick={() => {
          setShow(true);
          sendData(data);
        }}
      >
        <label>
          <BsFillBagFill />
        </label>
        Add to Cart
      </Button>

      <Modal
        className={styles.modal1}
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalbody}>
          <div>
            <h4 className={styles.high}>Added to your bag</h4>

            <div className={styles.firstDiv}>
              <div className={styles.secondDiv}>
                <img className={styles.image} src={data.thumbnail}></img>
              </div>
              <div className={styles.disc}>
                <p>{data.title}</p>
                <p>{data.price.raw}</p>

                <div className={styles.checkoutpop} onClick={sendToCart}>
                  Checkout
                </div>
              </div>
            </div>
            <Checkoutcarousel></Checkoutcarousel>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}



export default CheckPop;
