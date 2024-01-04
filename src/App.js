import React from "react";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import store from "./redux/app/store";

const App = () => {
  return (
    <div>
      <Nav />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
