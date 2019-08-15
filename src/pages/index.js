import React from "react"
import Layout from "../components/layout"
import * as Styled from "../stylesheet/styled"
import { Helmet } from "react-helmet"
import HomeDescription from "../components/HomeDescription"

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Anssam Ghezala's portfolio</title>
    </Helmet>
    <Styled.home>
      <HomeDescription />
    </Styled.home>
  </Layout>
)
