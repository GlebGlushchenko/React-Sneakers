import React, { memo } from "react";

import plus from "../assets/img/plus.svg";

import { item } from "../App";

const Card: React.FC<item> = (item) => {
  return (
    <div className="card">
      <img className="sneakers mb-15" src="/img/img_1.jpg" alt="sneakers" />
      <h5>{item.title}</h5>
      <div className="d-flex justify-between align-center mt-15">
        <div className="d-flex flex-column">
          <span className="price">Цена:</span>
          <b>{item.price}</b>
        </div>
        <button className="button">
          <img width={33} height={33} src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default memo(Card);
