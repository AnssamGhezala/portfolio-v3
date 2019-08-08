import React from "react"
import Layout from "../components/layout"
import * as Styled from "../stylesheet/styled"

export default () => (
  <Layout>
    <div>
      <h1>Publications so far :)</h1>
      <p>
        <div style={{ paddingLeft: "10px", marginBottom: "10%" }}>
          I publish articles monthly, every 1st day of the month!
        </div>

        <Styled.publicationContainer>
          <form
            action="https://dev.to/anssamghezala/you-don-t-have-to-use-redux-32a6"
            method="get"
            target="_blank"
          >
            <Styled.publicationButton type="submit">
              <Styled.publicationTitle>
                YOU DON'T HAVE TO USE REDUX🏅
              </Styled.publicationTitle>
              <p>
                An article published on dev.to comparing 3 different ways of
                handling the state: prop-drilling, using Redux library and using
                React’s context API. Voted one of the "Top 7 Of The Week" and
                attracted more than 18 000 unique views
              </p>
            </Styled.publicationButton>
          </form>
          <form
            action="https://medium.com/@ghezala.anssam/cool-kids-handle-state-with-hooks-3d2abad6651c"
            method="get"
            target="_blank"
          >
            <Styled.publicationButton type="submit">
              <Styled.publicationTitle>
                COOL KIDS HANDLE STATE WITH HOOKS
              </Styled.publicationTitle>
              <p>
                A writeup on Medium aiming to showcase the current state of
                state management in React using useState and useReducer hooks.
              </p>
            </Styled.publicationButton>
          </form>
          <form
            action="https://dev.to/anssamghezala/how-to-build-your-reusable-component-1mcb"
            method="get"
            target="_blank"
          >
            <Styled.publicationButton type="submit">
              <Styled.publicationTitle>
                HOW TO BUILD A REUSABLE COMPONENT
              </Styled.publicationTitle>
              <p>
                Shows how to build a reusable table component. The table can be
                easily customized either by using pre-built themes or using a
                custom stylesheet and supports changing its density.
              </p>
            </Styled.publicationButton>
          </form>
        </Styled.publicationContainer>
      </p>
    </div>
  </Layout>
)
