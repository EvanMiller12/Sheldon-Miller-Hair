import styled from "styled-components";

const PortfolioStyles = styled.section`
  .content-left {
    width: 50%;
  }
  .content-right {
    width: 50%;

    li:first-child {
      margin-left: 5px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 0;
  }
  li {
    position: relative;
  }

  li:hover .info-contain {
    display: block;
  }
  li:last-child {
    text-align: center;

    a {
      display: inline-block;
      width: 60%;
      border: 1px solid ${props => props.theme.navy};
      padding: 5px 10px;
      margin-top: 8%;
    }
    :hover a {
      color: ${props => props.theme.coral};
    }
  }
  .info-contain {
    display: none;
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
  }
  .style-info {
    margin: 15px 15px 0;
    padding: 25px 0;
    background-color: #fff;

    h3 {
      font-size: 2em;
    }
  }
`;

export default PortfolioStyles;
