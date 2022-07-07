import React from "react";
import Header from "./components/Header";
import "./scss/app.scss";

import plus from "./assets/img/plus.svg";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <main className="content p-40">
        <h1 className="mb-40">Все кросовки</h1>
        <div className="d-flex justify-between">
          <div className="card">
            <img className="sneakers mb-15" src="/img/img_1.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center mt-15">
              <div className="d-flex flex-column">
                <span className="price">Цена:</span>
                <b>12.999 руб.</b>
              </div>
              <button className="button">
                <img width={33} height={33} src={plus} alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img className="sneakers mb-15" src="/img/img_2.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center mt-15">
              <div className="d-flex flex-column">
                <span className="price">Цена:</span>
                <b>12.999 руб.</b>
              </div>
              <button className="button">
                <img width={33} height={33} src={plus} alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img className="sneakers mb-15" src="/img/img_3.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center mt-15">
              <div className="d-flex flex-column">
                <span className="price">Цена:</span>
                <b>12.999 руб.</b>
              </div>
              <button className="button">
                <img width={33} height={33} src={plus} alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img className="sneakers mb-15" src="img/img_4.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center mt-15">
              <div className="d-flex flex-column">
                <span className="price">Цена:</span>
                <b>12.999 руб.</b>
              </div>
              <button className="button">
                <img width={33} height={33} src={plus} alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
