import styled from "styled-components";

const HoursStyles = styled.section`
  background-color: ${props => props.theme.floralWhite};
  margin-top: 50px;
  padding-bottom: 100px;

  .hours-contain {
    display: flex;
    justify-content: space-around;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 150px;
      background-color: #fff;
      border: 1px solid ${props => props.theme.navy};

      span {
        font-size: 1.5em;
        letter-spacing: 1px;
      }
    }
    .closed {
      color: ${props => props.theme.coral};
    }
  }

  .hours-heading {
    color: ${props => props.theme.floralWhite};
    text-shadow: 1px 1px 2px ${props => props.theme.navy},
      -1px -1px 2px ${props => props.theme.navy},
      2px 2px 2px ${props => props.theme.navy};
    letter-spacing: 4px;
    text-align: center;
    margin: 25px 0;
  }

  @media (max-width: 696px) {
    .hours-section {
      margin-bottom: -25px;
    }

    .hours-contain {
      flex-direction: column;
      align-items: center;

      div {
        height: 100px;
        text-align: center;
        border: none;
        border-bottom: 1px solid ${props => props.theme.navy};

        :last-child {
          border-bottom: none;
        }
      }
    }
    .small-contain {
      width: 90%;
    }
  }
`;

export default HoursStyles;
