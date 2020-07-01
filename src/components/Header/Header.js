import React, { useState, useRef, useEffect } from "react"

// Other Component
import NavBar from "../Navbar/Navbar"

// Header CSS used
import style from "./Header.module.css"

import cx from "classnames"

const Header = () => {
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={style.header}>
      <NavBar
        className={cx(
          style.bg,
          navBackground ? style.uponscroll : style.defaultscroll
        )}
      />
      <div className={style.homeContent}>
        <h1>Training Innovative 4IR Developers</h1>
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
