import styled from "styled-components"

export const ListLink = styled.li`
  @media (max-width: 500px) {
    font-size: 15px;
    margin-bottom: -1.5rem;
    margin-right: 0.7rem;
  }

  display: inline-block;
  margin-right: 1rem;
`
export const div = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`

export const miniDescription = styled.p`
  @media (max-width: 500px) {
    font-size: 5vw;
    line-height: 5vh;
  }
  padding-top: 10%;
  font-size: 25px;
  line-height: 1.7;
`
export const titleContainer = styled.div`
  margin-bottom: 10px;
  display: block;
  @media (min-width: 500px) {
    height: 150px;
  }
  @media (max-width: 500px) {
    margin-top: 15%;
    height: 10em;
  }
`

export const h1 = styled.h1`
  @media (max-width: 500px) {
    font-size: 12vw;
  }
  margin-top: 0px;
  margin-bottom: 0px;
`
export const buttonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const publicationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const projectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 500px) {
    height: 24em;
    overflow: scroll;
  }
`

export const publicationTitle = styled.label`
  font-weight: bold;
  font-size: 20px;
`

export const publicationButton = styled.button`
  width: 100%;
  font-size: 14px;
  color: #31302b;
  background: #fff;
  padding: 12px 17px;
  margin-bottom: 5%;
  border: 3px solid #31302b;
  letter-spacing: 1px;
  border-radius: 2px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  box-shadow: inset 0 0 1px 0 #31302b;
  -webkit-transition: all ease 0.8s;
  -moz-transition: all ease 0.8s;
  transition: all ease 0.8s;
  @media (max-width: 500px) {
    &:active {
      background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    }
  }
  @media (min-width: 500px) {
    &:hover {
      box-shadow: inset 0 135px 0 0 #84fab0;
      color: #fff;
    }
  }
`
export const skillButton = styled.button`
  color: #31302b;
  background: #fff;
  padding: 12px 17px;
  margin: 2px;
  font-family: "OpenSansBold", sans-serif;
  border: 3px solid #31302b;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 2px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #31302b;
  -webkit-transition: all ease 0.8s;
  -moz-transition: all ease 0.8s;
  transition: all ease 0.8s;
  &:hover {
    box-shadow: inset 0 100px 0 0 #84fab0;
    color: #fff;
  }
`
export const underline = styled.label`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;

  &:hover {
    background-size: 100% 88%;
  }
`
export const wrapper = styled.div`
  display: flex;
`

export const ul = styled.ul`
  @media (max-width: 500px) {
    margin-bottom: -1.5rem;
  }
  ist-style: none;
  margin-left: 0px;
`

export const h3 = styled.h3`
  display: inline;
`

export const img = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
  width: 100%;
  height: 100vh;
  background-image: url("https://i.imgur.com/BJDcR6u.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const HomeDescription = styled.div`
  @media (max-width: 500px) {
    margin-top: 0px;
  }
  margin-right: 10px;
  margin-top: 30%;
  width: 100%;
`

export const home = styled.div`
  width: 100%;
`
