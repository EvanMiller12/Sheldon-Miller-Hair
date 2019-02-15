import styled from "styled-components";

const ServicesStyles = styled.section`
  .service-section {
    display: flex;
    height: 90vh;
  }

  .service-section > :first-child {
    background-color: ${props => props.theme.coral};
  }

  .service-section > :nth-child(2) {
    background-color: ${props => props.theme.lightGrey};
  }

  .service-section > :last-child {
    background-color: ${props => props.theme.navy};
  }

  .service-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 50%;
    color: #fff;
    padding: 5px;

    h3 {
      margin: 0;
    }

    ul {
      font-size: 1.5em;
    }

    a {
      color: #fff;
      border: 1px solid;
      padding: 0 10px;
      margin-top: 20px;
      transition: ease-in 0.3s;

      :hover {
        color: ${props => props.theme.navy};
        background-color: #fff;
      }
    }
  }
  .service-img {
    height: 50%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    .service-section {
      height: 50vh;
    }
  }
  @media (max-width: 768px) {
    .service-content a {
      margin-top: 10px;
    }
  }
  @media (max-width: 696px) {
    .service-section {
      display: block;
      height: auto;
    }
    .service-content {
      padding: 4em 0;
    }
    .service-img {
      display: none;
    }
  }
`;

export default ServicesStyles;
