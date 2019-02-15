import styled from "styled-components";

const ServiceListItemStyles = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  border-bottom: 1px solid ${props => props.theme.lightGrey};

  :first-child {
    padding-top: 0;
  }

  :last-child {
    border: none;
  }

  h3 {
    text-align: center;
    margin: 0;
  }

  h4 {
    text-align: center;
    color: ${props => props.theme.coral};
    font-weight: 100;
    letter-spacing: 2px;
  }

  .l-col,
  .r-col {
    display: inline-block;
    width: 48%;
  }

  .service-detail-contain {
    padding: 0 25px;
  }

  .service-detail {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 1.7em;
    color: ${props => props.theme.midGrey};
    border-bottom: 1px dotted ${props => props.theme.lightGrey};
  }
  .book-now {
    text-align: center;
    margin-top: 40px;
    a {
      padding: 5px 15px;
      color: #fff;
      background-color: ${props => props.theme.navy};
      border: 2px solid ${props => props.theme.navy};
      transition: ease-in 0.3s;
      :hover {
        color: ${props => props.theme.navy};
        background-color: #fff;
      }
    }
  }

  @media (max-width: 696px) {
    flex-direction: column;

    h3 {
      margin-bottom: 10px;
    }
    .r-col,
    .l-col {
      width: 100%;
    }

    .r-col {
      margin-top: 25px;
    }
  }
`;

export default ServiceListItemStyles;
