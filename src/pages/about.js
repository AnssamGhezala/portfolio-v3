import React from "react"
import Layout from "../components/layout"
import * as Styled from "../stylesheet/styled"

export default () => (
  <Layout>
    <div>
      <h1>About me</h1>

      <p>
        I like{" "}
        <Styled.underline>
          reading stuff about the web dev industry
        </Styled.underline>
        , and am curious about anything related it. Although I am currently
        learning the core computer science/software engineering topics at
        McGill, most of the web-dev related skills that I have achieved are{" "}
        <Styled.underline>self-taught</Styled.underline>. I love the Web and I
        want to be able to contribute to it, which is why I hope to get an{" "}
        <Styled.underline>internship </Styled.underline> or a{" "}
        <Styled.underline>
          partime position in front-end related positions
        </Styled.underline>{" "}
        :){" "}
      </p>
      <h1>Skills</h1>
      <Styled.buttonContainer>
        <Styled.skillButton> JavaScript </Styled.skillButton>
        <Styled.skillButton> HTML/CSS </Styled.skillButton>
        <Styled.skillButton> React </Styled.skillButton>
        <Styled.skillButton> React Native </Styled.skillButton>
        <Styled.skillButton> Redux </Styled.skillButton>
        <Styled.skillButton> Gatsby </Styled.skillButton>
        <Styled.skillButton> Netlify </Styled.skillButton>
        <Styled.skillButton> OCaml </Styled.skillButton>
        <Styled.skillButton> ReasonReact </Styled.skillButton>
        <Styled.skillButton> Express </Styled.skillButton>
        <Styled.skillButton> Java </Styled.skillButton>
        <Styled.skillButton> Python </Styled.skillButton>
        <Styled.skillButton> SQL </Styled.skillButton>
        <Styled.skillButton> REST APIs </Styled.skillButton>
      </Styled.buttonContainer>
    </div>
  </Layout>
)
