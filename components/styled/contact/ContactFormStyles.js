import styled from "styled-components";

const ContactFormStyles = styled.section`
  .contain {
    display: flex;
    justify-content: center;
  }
  .small-contain {
    width: 50%;

    p {
      font-size: 2.5em;
    }
  }
  form {
    position: relative;
    display: flex;
    flex-direction: column;

    input,
    textarea {
      border: 1px solid ${props => props.theme.lightGrey};
    }

    input {
      height: 50px;
      padding: 20px;
      margin: 10px 0;
      font-size: 2em;
    }

    input:focus {
      color: ${props => props.theme.navy};
      border-top: 1px solid white;
      border-right: 1px solid white;
      border-left: 1px solid white;
      border-bottom: 3px solid ${props => props.theme.coral};
      outline: none;
    }
    textarea {
      padding: 20px;
      font-size: 2em;
    }

    textarea:focus {
      outline: none;
      border: 1px solid ${props => props.theme.coral};
    }
    button {
      position: absolute;
      bottom: -25px;
      right: 25%;
      font-size: 2.5em;
      letter-spacing: 1px;
      font-weight: 500;
      width: 20%;
      padding: 15px 0;
      background-color: ${props => props.theme.coral};
      color: ${props => props.theme.floralWhite};
    }
  }

  @media (max-width: 696px) {
    form {
      button {
        width: 60%;
        font-size: 2em;
      }
    }
`;
export default ContactFormStyles;
