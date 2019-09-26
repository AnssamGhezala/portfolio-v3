import React from "react"
import * as Styled from "../stylesheet/styled"

const PublicationLayout = ({ title, medal, url, description }) => {
  return (
    <div>
      <form action={url} method="get" target="_blank" style={{ width: "100%" }}>
        <Styled.publicationButton type="submit">
          <Styled.publicationTitle>
            {title}
            {medal && <span role="img">🏅</span>}
          </Styled.publicationTitle>
          <div>{description}</div>
        </Styled.publicationButton>
      </form>
    </div>
  )
}

export default PublicationLayout
