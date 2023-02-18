import React from "react";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import "./header.css";
import { motion } from "framer-motion";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "product",
    display: "Product",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <NavLink to='/'>
              <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h1>
                    <span>T</span>
                    <span>o</span>
                    <span>p</span>
                    <span style={{ color: "red" }}>Z</span>
                    <span style={{ color: "blue" }}>o</span>
                    <span style={{ color: "green" }}>n</span>
                    <span style={{ color: "pink" }}>e</span>
                  </h1>
                </div>
              </div>
            </NavLink>

            <div className="nav__navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__items" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="heart__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="user"
                />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
