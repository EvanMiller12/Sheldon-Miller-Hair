import styled from "styled-components";

const HomeHeader = styled.header`
  .header-img {
    width: 100%;
    height: 500px;
    overflow: hidden;
  }
  .header-img img {
    max-width: 100%;
    position: relative;
    top: -140px;
    opacity: 0.8;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    display: inline-block;
    padding-right: 5px;

    :last-child {
      padding-right: 0;
    }

    a {
      font-size: 3em;
      color: ${props => props.theme.coral};
      text-decoration: underline;
    }
  }

  .contain {
    justify-content: space-around;
    padding-top: 2rem;
  }

  .content-left {
    width: 40%;
    text-align: center;
  }
  .content-right {
    width: 40%;
  }

  @media (max-width: 768px) {
    .header-img {
      height: 375px;
    }

    .contain {
      li {
        a {
          font-size: 1.8em;
        }
      }
    }
  }

  @media (max-width: 414px) {
    .header-img {
      height: 300px;
      overflow: visible;

      img {
        top: 20px;
      }
    }
  }
`;

export default HomeHeader;
