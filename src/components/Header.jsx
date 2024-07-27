import React from "react";
//import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>StyleEasy</h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#cart">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
