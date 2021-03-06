import styled from "styled-components";

const ContactInfoStyles = styled.section`
  padding: 25px 0;
  .contact-contain {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid ${props => props.theme.coral};
  }
  .contact-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    height: 300px;
    border-right: 1px solid ${props => props.theme.coral};
    address,
    span {
      font-size: 1.5em;
    }

    a {
      transition: ease-in-out 0.3s;

      :hover {
        color: ${props => props.theme.coral};
      }
    }
  }

  @media (max-width: 768px) {
    .contact-col {
      padding: 0 10px;
      text-align: center;
    }
  }

  @media (max-width: 767px) {
    .contact-contain {
      flex-direction: column;
      align-items: center;
      background-color: ${props => props.theme.coral};
      border: none;
    }
    .contact-col {
      width: 99%;
      height: 175px;
      margin-bottom: 2px;
      margin-top: 0;
      border: none;
      background-color: #fff;
    }
  }
`;

export default ContactInfoStyles;
