import React from "react"

// Other Component
import NavBar from "../Navbar/Navbar"

// Header CSS used
import style from "./Header.module.css"

import Video from "../../Video/fullScreen.mp4"
import Typist from 'react-typist';


const Header = () => {
 
  return (
    <div className={style.header}>
      <video
        style={{
          // opacity:".7",
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
        autoPlay
        loop
        muted
      >
        <source src={Video} type="video/mp4" />
      </video>

      <NavBar />
      <div className={style.homeContent}>
      <Typist><h2>Training Innovative 4IR Developer</h2>
       <p>
          {" "}
          For the Industry & Getting{" "}
          <span style={{ color: "#FFCB9A" }}>
            Sri Lanka
          </span>{" "}
          ready for Post Covid-19 Economy
        </p>
        </Typist>
        <button className={style.stared}>Get Started!</button>
        <button className={style.more}>Learn more</button>
      
      </div>
    </div>
  )
}

export default Header
