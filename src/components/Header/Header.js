import React from "react"

// Other Component
import NavBar from "../Navbar/Navbar"

// Header CSS used
import style from "./Header.module.css"



const Header = () => {


  return (
    <div className={style.header}>
      <NavBar />
      <div className={style.homeContent}>
        <h1>Training Innovative 4IR Developer</h1>
        <p>
          {" "}
          For the Industry & Getting{" "}
          <span style={{ color: "black", borderBottom: "1px solid black" }}>
            Sri Lanka
          </span>{" "}
          ready for Post Covid-19 Economy
        </p>
        <button className={style.stared}>Get Started!</button>
        <button className={style.more}>Learn more</button>
      </div>
    </div>
  )
}

export default Header
