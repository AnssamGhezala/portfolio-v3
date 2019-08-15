import React from "react"
import Layout from "../components/layout"
import PublicationLayout from "../components/PublicationLayout"
import { graphql } from "gatsby"
import * as Styled from "../stylesheet/styled"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>Projects so far :)</h1>
      <div style={{ paddingLeft: "10px", marginBottom: "10%" }}>
        All of them can be found <a href="github.com/AnssamGhezala">here</a>!{" "}
      </div>
      <Styled.projectsContainer>
        {data.site.siteMetadata.projects.map((el, idx) => (
          <PublicationLayout
            title={el.title}
            medal={el.medal}
            description={el.description}
            url={el.url}
          ></PublicationLayout>
        ))}
      </Styled.projectsContainer>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        projects {
          title
          description
          url
          medal
        }
      }
    }
  }
`
