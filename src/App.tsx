import React from "react";
import Header from "./components/Header";
import "./scss/app.scss";

import axios from "axios";

import Card from "./components/Card";
import { fetchSneakers, setSearchValue } from "./redux/sneaker-slice";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";

export type item = {
  title: string;
  id: string;
  price: string;
};

export type sneakers = [item];

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.sneakers.items);
  const searchValue = useSelector((state: RootState) => state.sneakers.searchValue);

  React.useEffect(() => {
    dispatch(fetchSneakers(searchValue));
  }, [searchValue]);

  return (
    <div className="container">
      <Header />
      <main className="content p-40">
        <div className="title d-flex justify-between mb-40">
          <h1>Все кросовки</h1>
          <div className="search">
            <input
              onChange={(e) => dispatch(setSearchValue(e.target.value))}
              value={searchValue}
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="item__card">
          {items &&
            items.map((item: item) => {
              return <Card key={item.id} {...item} />;
            })}
        </div>
      </main>
    </div>
  );
};

export default App;
