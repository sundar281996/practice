import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Product from "./Components/Product";
import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      title: "Fancy Product",
      price: "$40.00 - ",
      price1: "$80.00",
      isEnable: false,
      isSpan: false,
    },
    {
      id: 2,
      title: "Special Item",
      price: "$20.00 ",
      price1: "$18.00",
      isEnable: true,
      isSpan: true,
    },
    {
      id: 3,
      title: "Sale Item",
      price: "$50.00 ",
      price1: "$25.00",
      isEnable: true,
      isSpan: true,
    },
    {
      id: 4,
      title: "Popular Item",
      price: "$40.00",
      isEnable: false,
      isSpan: false,
    },
    {
      id: 5,
      title: "Sale Item",
      price: "$50.00 ",
      price1: "$25.00",
      isEnable: true,
      isSpan: true,
    },
    {
      id: 6,
      title: "Fancy Product",
      price: "$120.00 - ",
      price1: "$280.00",
      isEnable: false,
      isSpan: false,
    },
    {
      id: 7,
      title: "Special Item",
      price: "$20.00 ",
      price1: "$18.00",
      isEnable: true,
      isSpan: true,
    },
    {
      id: 8,
      title: "Popular Item",
      price: "$40.00",
      isEnable: false,
      isSpan: false,
    },
  ];
  const [cart, setCart] = useState([]);
  let addtocart = (item) => {
    setCart([...cart, item]);
  };
  let removeCart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
  };
  return (
    <div>
      <Navbar handleremoveCart={removeCart} cart={cart}></Navbar>
      <Header></Header>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((item) => {
            return (
              <Product
                item={item}
                cartitems={cart}
                handleaddtocart={addtocart}
              ></Product>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
