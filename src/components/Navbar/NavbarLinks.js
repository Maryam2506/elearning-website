import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// DropDown CSS used
import style from "./DropDown.module.css"

// react-icons library
import { 
  // FaUserAlt, 
  FaCaretDown, 
  FaShoppingCart, 
  FaUserCircle } from "react-icons/fa"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #197da8;
  font-weight: 550;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: "";
    color: transparent;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: black;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/404">Home</NavItem>
      <NavItem to="/404">About</NavItem>
      <NavItem to="/404">Courses</NavItem>
      <div className={style.dropdown}>
        <NavItem to="/404">
          Pages
          <FaCaretDown />
        </NavItem>
        <div className={style.menus}>
          <NavItem to="/">Element 1</NavItem>
          <NavItem to="/">Element 2</NavItem>
          <NavItem to="/">Element 3</NavItem>
        </div>
      </div>
      <div className={style.dropdown}>
        <NavItem to="/">
          Blog
          <FaCaretDown />
        </NavItem>
        <div className={style.menus}>
          <NavItem to="/">Element 1</NavItem>
          <NavItem to="/">Element 2</NavItem>
        </div>
      </div>
      <NavItem to="/">Contact</NavItem>
      {/* <div style={{ borderStyle: "groove", padding: "1%" }}>
        {" "}
        <NavItem to="/">
          {" "}
          <FaUserAlt /> Login<span> | </span> Register{" "}
        </NavItem>{" "}
      </div> */}
      <NavItem to="/">  <FaUserCircle style={{ color:"black"}} title="Resigtor | login"/>  </NavItem>
      <NavItem to="/">
        {" "}
        <FaShoppingCart title="Cart" />
      </NavItem>
    </>
  )
}

export default NavbarLinks
