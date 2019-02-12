import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Nav from './Nav';
import Meta from './Meta';
import Footer from './Footer';
import ContactInfo from './ContactInfo';

const theme = {
  navy: '#2e3c40',
  coral: '#D49F9B',
  lightGrey: '#C0C0C0',
  black: '#191818',
  floralWhite: '#fffaf0'
  // maxWidth: '1500px'
  // bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.navy};
`;

const Inner = styled.div`
  /* max-width: ${props => props.theme.maxWidth}; */
  /* margin: 0 auto;
  padding: 2rem; */
  width: 100%;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100vh;
    width: 100%;
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
    font-family: 'Oswald', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Anton', sans-serif;
    text-transform: uppercase;
  }
  h1 {
    font-size: 7em;
    letter-spacing: 7px;
    font-weight: 500;
  }
  h2 {
    font-size: 6em;
    letter-spacing: 4px;
    font-weight: 300;
  }

  h3 {
    font-size: 5em;
    letter-spacing: 3px;
    font-weight: 300;
    margin: 0;
  }
  h4 {
    font-size: 4em;
    letter-spacing: 2px;
    font-weight: 200;
    margin: 0;
  }

  h5 {
    font-size: 3em;
    letter-spacing: 2px;
    font-weight: 200;
    margin: 0;
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
  section {
    padding: 50px 0;
  }
  allow-scrollover-footer {}
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="allow-scrollover-footer">
          <StyledPage>
            <Meta />
            <Nav />
            <Inner>{this.props.children}</Inner>
            <ContactInfo />
          </StyledPage>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Page;
