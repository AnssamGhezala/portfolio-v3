import React, { useState, useEffect } from "react"
import AnimateOnChange from "react-animate-on-change"
import "../stylesheet/styles.css"
import * as Styled from "../stylesheet/styled"

const HomeDescription = () => {
  const roles = ["web developer", "writer", "learner", "student"]
  const [state, setState] = useState({ idx: 0 })
  const timeOut = () => {
    setTimeout(function() {
      if (state.idx === roles.length - 1) {
        setState({ ...state, idx: 0 })
      } else {
        setState({ ...state, idx: state.idx + 1 })
      }
    }, 2000)
  }
  useEffect(() => {
    timeOut()
    return function cleanup() {
      clearTimeout(timeOut)
    }
  }, [state.idx])

  return (
    <Styled.HomeDescription>
      <Styled.titleContainer>
        <Styled.h1>
          My name is Anssam, and I'm a <br></br>
        </Styled.h1>

        <AnimateOnChange
          baseClassName="message"
          animationClassName="message-clicked"
          animate={true}
        >
          <Styled.h1>{roles[state.idx]}</Styled.h1>
        </AnimateOnChange>
      </Styled.titleContainer>
      <Styled.miniDescription>
        {" "}
        Hi! I'm a Software Engineering student at{" "}
        <Styled.underline>McGill University</Styled.underline> :) I like
        building small things with{" "}
        <Styled.underline>JavaScript</Styled.underline> and{" "}
        <Styled.underline>React</Styled.underline> and am exploring the web dev
        world! I also write{" "}
        <Styled.underline>monthly articles</Styled.underline> on{" "}
        <a href="https://dev.to/anssamghezala">dev.to </a>and{" "}
        <a href="https://medium.com/@ghezala.anssam">Medium</a>. Chekchout my
        publications!
      </Styled.miniDescription>
    </Styled.HomeDescription>
  )
}

export default HomeDescription
