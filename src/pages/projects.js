import React from "react"
import Layout from "../components/layout"
import PublicationLayout from "../components/PublicationLayout"
import { graphql } from "gatsby"
import * as Styled from "../stylesheet/styled"

export default ({ data }) => (
  <Layout>
    <div style={{ paddingBottom: "20%" }}>
      <h1>Projects so far :)</h1>
      <div style={{ paddingLeft: "10px", marginBottom: "10%" }}>
        All of them can be found <a href="github.com/AnssamGhezala">here</a>!{" "}
      </div>
      <Styled.projectsContainer>
        {data.allContentfulProject.edges.map((el, idx) => (
          <PublicationLayout
            key={idx}
            title={el.node.title}
            description={el.node.description}
            url={el.node.slug}
          ></PublicationLayout>
        ))}
      </Styled.projectsContainer>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          title
          description
          slug
        }
      }
    }
  }
`
