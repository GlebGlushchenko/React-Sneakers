import React, { memo } from "react";

import logo from "../assets/img/logo.svg";
import cart from "../assets/img/cart-icon.svg";
import profile from "../assets/img/person.svg";
import favorites from "../assets/img/heart-icon.svg";

export const Header = () => {
  return (
    <header className="header d-flex justify-between align-center p-45">
      <div className="header__content-left d-flex justify-between">
        <a href="#" className="header__logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="header__info">
          <h3 className="header__title">REACT SNEAKERS</h3>
          <p className="header__sub-title opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="header__content-right">
        <ul className="header__nav d-flex justify-between clear">
          <li className="header__nav-cart d-flex justify-between mr-30">
            <a href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                  stroke="#9B9B9B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                  stroke="#9B9B9B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                  stroke="#9B9B9B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <p>1205 руб.</p>
          </li>
          <li className="header__nav-favorites">
            <a href="#">
              <img src={favorites} alt="Profile-logo" />
            </a>
          </li>

          <li className="header__nav-profile">
            <a href="#">
              <img src={profile} alt="Profile-logo" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
