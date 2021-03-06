import styled from "styled-components";

const TestimonialStyles = styled.section`
  .heading {
    text-align: center;
  }
  h2 {
    display: inline-block;
  }
  span {
    margin-left: 30px;
    font-size: 6.5em;
    font-family: "Lobster", cursive;
    color: ${props => props.theme.coral};
  }
  b {
    font-size: 1.8em;
    color: ${props => props.theme.midGrey};
    font-weight: 200;
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
  li {
    display: flex;
    justify-content: space-around;
    h3 {
      font-size: 3em;
      margin: 0;
    }
  }
  .testimonial {
    display: inline-block;
    width: 80%;
    text-align: center;
  }

  @media (max-width: 768px) {
    .heading {
      margin-bottom: 25px;
      span {
        font-size: 5em;
      }
    }
  }

  @media (max-width: 696px) {
    .heading {
      span {
        font-size: 4em;
      }
    }
    .clients {
      ul {
        flex-direction: column;

        li {
          padding: 15px 0;
        }
      }
    }
    .testimonial {
      width: 100%;

      p {
        display: none;
      }
    }
  }
`;

export default TestimonialStyles;
