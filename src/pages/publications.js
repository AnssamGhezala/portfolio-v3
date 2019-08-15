import React from "react"
import Layout from "../components/layout"
import PublicationLayout from "../components/PublicationLayout"
import * as Styled from "../stylesheet/styled"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>Publications so far :)</h1>
      <div style={{ paddingLeft: "10px", marginBottom: "10%" }}>
        I publish articles monthly, every 1st day of the month!
      </div>
      <Styled.publicationContainer>
        {data.site.siteMetadata.publications.map((el, idx) => (
          <PublicationLayout
            title={el.title}
            medal={el.medal}
            description={el.description}
            url={el.url}
          ></PublicationLayout>
        ))}
      </Styled.publicationContainer>
    </div>
  </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        publications {
          title
          description
          url
          medal
        }
      }
    }
  }
`
