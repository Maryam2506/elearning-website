import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Getting logo from Image
import logo from "../../images/logo.png"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 35px;



  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <img src={logo} width={"79"} />
    </LogoWrap>
  )
}

export default Logo
