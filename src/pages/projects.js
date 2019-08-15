import React from "react"
import Layout from "../components/layout"
import PublicationLayout from "../components/PublicationLayout"
import * as Styled from "../stylesheet/styled"

const projects = [
  {
    title: "Customizable table 💅",
    description:
      "Customizable table using the latest version of React Hooks, styled-components for CSS-in-JS styling",
    url: "https://github.com/AnssamGhezala/custom-table",
    medal: false,
  },
  {
    title: "Personal Portfolio",
    description:
      "Personal portfolio containing information about me, my publications, projects and way to contant me. Built using Gatsby, styled-components (CSS-in-JS), GraphQL (data query) and Netlify (deployment). You are looking at it right now!",
    url: "https://github.com/AnssamGhezala/portfolio-v3",
    medal: true,
  },
  {
    title: "Calculator ➗",
    description:
      "Calculator built using useReducer hook (branch: useReducer) and useState hook (branch: useState)",
    url: "https://github.com/AnssamGhezala/useReducer_calculator",
    medal: false,
  },
  {
    title: "CO-OPERATOR 👩‍🎓",
    description:
      "[PRIVATE REPO] System for managing co-op terms, allowing administrators to submit/modify files, view students’ status and progress, and send reminders. Java, Spring Boot, Hibernate, Postgres, React",
    url:
      "https://github.com/McGill-ECSE321-Winter2019/ecse321-group-project-10",
    medal: false,
    private: true,
  },
  {
    title: "Stopwatch ⌚️",
    description: "Stopwatch built using React ✨",
    url: "https://github.com/AnssamGhezala/stopwatch",
    medal: false,
  },
]

export default () => (
  <Layout>
    <div>
      <h1>Projects so far :)</h1>
      <p>
        <div style={{ paddingLeft: "10px", marginBottom: "10%" }}>
          All of them can be found <a href="github.com/AnssamGhezala">here</a>!{" "}
        </div>
        <Styled.projectsContainer>
          {projects.map((el, idx) => (
            <PublicationLayout
              title={el.title}
              medal={el.medal}
              description={el.description}
              url={el.url}
            ></PublicationLayout>
          ))}
        </Styled.projectsContainer>
      </p>
    </div>
  </Layout>
)
