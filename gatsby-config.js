/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `Anssam Ghezala's portfolio`,
    publications: [
      {
        title: "YOU DON'T HAVE TO USE REDUX",
        description:
          'An article published on dev.to comparing 3 different ways of handling the state: prop-drilling, using Redux library and using React’s context API. Voted one of the "Top 7 Of The Week" and attracted more than 18 000 unique views',
        url: "https://dev.to/anssamghezala/you-don-t-have-to-use-redux-32a6",
        medal: true,
      },
      {
        title: "Contentful+Gatsby = Smarter content management",
        description:
          "A writeup published by Soshace aiming to show how to integrate Contentful with Gatsby for better content management. Includes a small introduction to GraphQL data querying",
        url:
          "https://blog.soshace.com/en/javascript/react/contentfulgatsby-smarter-content-management/",
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
      {
        title: "COOL KIDS HANDLE STATE WITH HOOKS",
        description:
          "A writeup on Medium aiming to showcase the current state of state management in React using useState and useReducer hooks.",
        url:
          "https://medium.com/@ghezala.anssam/cool-kids-handle-state-with-hooks-3d2abad6651c",
        medal: false,
      },
    ],
    projects: [
      {
        title: "Flora 🌿(AI+Climate Change Hackathon 🔥)",
        description:
          "Android+IOS application using an AI to classify different categories of leaves (diseased or non-diseased), with a Google Map spreading showing the area of the diseased leaves. Built using Keras (Python neural-network library) for the deep-learning model, Flask for the REST API and React Native for the UI.",
        url: "https://devpost.com/software/awesomeproject",
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
        title: "Customizable table 💅",
        description:
          "Customizable table using the latest version of React Hooks, styled-components for CSS-in-JS styling",
        url: "https://github.com/AnssamGhezala/custom-table",
        medal: false,
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
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142030256-1",
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
