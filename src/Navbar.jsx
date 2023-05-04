import React from "react";
import styles from "./Navbar.module.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [value, setValue] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleProductClick = (value) => {
    setValue(value);
    setShowPopup(true);
  };
  const handleClose = () => {
    setValue(0);
    setShowPopup(false);
  };

  const renderPopup = () => {
    if (value === 1) {
      return (
        <div className={styles.popup}>
          <div className={styles.close}>
            <AiOutlineClose
              size={30}
              color="white"
              onClick={() => handleClose()}
            />
          </div>
          <div className={styles.card}>
            <h2>Product 1 Details</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      );
    } else if (value === 2) {
      return (
        <div className={styles.popup}>
          <div className={styles.close}>
            <AiOutlineClose
              size={30}
              color="white"
              onClick={() => handleClose()}
            />
          </div>
          <div className={styles.card}>
            <h2>Product 2 Details</h2>
            <p>
              Nullam dictum augue ut urna rutrum, vel ullamcorper sapien varius.
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <>
      <div className={styles.Navbar}>
        <h1>Home</h1>
        <div class={styles.dropdown}>
          <button class={styles.dropbtn}>Product</button>
          <div class={styles.dropdown_content}>
            <a href="#" onClick={() => handleProductClick(1)}>
              Product 1
            </a>
            <a href="#" onClick={() => handleProductClick(2)}>
              Product 2
            </a>
          </div>
        </div>
      </div>
      {showPopup && renderPopup()}
    </>
  );
}

export default Navbar;
