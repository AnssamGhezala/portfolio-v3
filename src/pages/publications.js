import React from "react"
import Layout from "../components/layout"
import PublicationLayout from "../components/PublicationLayout"
import * as Styled from "../stylesheet/styled"

const publications = [
  {
    title: "YOU DON'T HAVE TO USE REDUX",
    description:
      'An article published on dev.to comparing 3 different ways of handling the state: prop-drilling, using Redux library and using React’s context API. Voted one of the "Top 7 Of The Week" and attracted more than 18 000 unique views',
    url: "https://dev.to/anssamghezala/you-don-t-have-to-use-redux-32a6",
    medal: true,
  },
  {
    title: "COOL KIDS HANDLE STATE WITH HOOKS",
    description:
      "A writeup on Medium aiming to showcase the current state of state management in React using useState and useReducer hooks.",
    url:
      "https://medium.com/@ghezala.anssam/cool-kids-handle-state-with-hooks-3d2abad6651c",
    medal: false,
  },
  {
    title: "HOW TO BUILD YOUR REUSABLE COMPONENT",
    description:
      "Shows how to build a reusable table component. The table can be easily customized either by using pre-built themes or using a custom stylesheet and supports changing its density.",
    url:
      "https://dev.to/anssamghezala/how-to-build-your-reusable-component-1mcb",
    medal: false,
  },
]

export default () => (
  <Layout>
    <div>
      <h1>Publications so far :)</h1>
      <p>
        <div style={{ paddingLeft: "10px", marginBottom: "10%" }}>
          I publish articles monthly, every 1st day of the month!
        </div>

        <Styled.publicationContainer>
          {publications.map((el, idx) => (
            <PublicationLayout
              title={el.title}
              medal={el.medal}
              description={el.description}
              url={el.url}
            ></PublicationLayout>
          ))}
        </Styled.publicationContainer>
      </p>
    </div>
  </Layout>
)
