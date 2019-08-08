import React from "react"
import Layout from "../components/layout"
import * as Styled from "../stylesheet/styled"
import HomeDescription from "../components/HomeDescription"

export default () => (
  <Layout>
    <Styled.home>
      <HomeDescription />
    </Styled.home>
  </Layout>
)
