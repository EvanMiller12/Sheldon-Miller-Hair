import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Meta from "./Meta";
import Nav from "./Nav";
import NavigationOptions from "./NavigationOptions";
import ContactInfo from "./ContactInfo";
import Footer from "./Footer";

const theme = {
  navy: "#2e3c40",
  coral: "#D49F9B",
  lightGrey: "#C0C0C0",
  black: "#191818",
  floralWhite: "#fffaf0"
};

const StyledPage = styled.div`
  background: ${props => props.theme.floralWhite};
  color: ${props => props.theme.navy};
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100vh;
    max-width: 100%;
    word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    color: ${theme.navy};
    padding: 0;
    margin: 0;
    line-height: 2;
    font-family: 'Montserrat', sans-serif;
  }

  section {
    padding: 4rem 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Nanum Gothic', sans-serif;
    text-transform: uppercase;
    margin: 0;
  }
  h1 {
    font-size: 6.5em;
  }
  h2 {
    font-size: 5.5em;
  }

  h3 {
    font-size: 4.5em;
  }
  h4 {
    font-size: 3.5em;
  }

  h5 {
    font-size: 2.5em;
  }

  .sub-title {
    font-family: 'Lobster', cursive;
  }
  a {
    font-size: 2em;
    color: ${theme.navy};
    text-decoration: none;
  }
  p {
    font-size: 1.8em;
  }
  ul {
    padding: 0;
    list-style: none;
  }
  img {
    max-width: 100%;
  }
  button {  font-family: 'Oswald', sans-serif; }

  .contain {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .allow-scrollover-footer {}
  @media(max-width: 768px) {
    h1 {
    font-size: 4.5em;
  }
  h2 {
    font-size: 3.5em;
  }

  h3 {
    font-size: 2.5em;
  }
  h4 {
    font-size: 2.0em;
  }

  h5 {
    font-size: 1.8em;
  }
  a {
    font-size: 1.6em;
    color: ${theme.navy};
    text-decoration: none;
  }
  p {
    font-size: 1.6em;
  }
body {
  line-height: 1.4;
}
  section {
    padding: 25px 0;
  }
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <StyledPage>
            <Meta />
            <Nav />
            {this.props.children}
            <NavigationOptions />
            <ContactInfo />
          </StyledPage>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Page;
