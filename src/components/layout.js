import React from "react"
import { Link } from "gatsby"
import * as Styled from "../stylesheet/styled"

const ListLink = props => (
  <Styled.ListLink>
    <Link to={props.to}>{props.children}</Link>
  </Styled.ListLink>
)
export default ({ children }) => (
  <Styled.wrapper>
    <Styled.div>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <Styled.h3>Personal Portfolio</Styled.h3>
        </Link>
        <Styled.ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/publications/">Publications</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </Styled.ul>
      </header>
      {children}
    </Styled.div>
    <Styled.img></Styled.img>
  </Styled.wrapper>
)
