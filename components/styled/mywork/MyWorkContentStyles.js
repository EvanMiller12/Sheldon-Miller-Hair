import styled from "styled-components";

const MyWorkContentStyles = styled.section`
  width: 100%;

  .contain {
    display: flex;
    justify-content: space-around;
    align-self: center;
  }

  .gallery-container {
    width: 75%;
  }

  .gallery-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0;

    li {
      position: relative;
      width: 49%;

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .contain {
      flex-direction: column;

      aside {
        width: 100%;
        height: auto;
        padding: 15px 0;
        text-align: center;
      }
    }

    .filter-options {
      li {
        display: inline-block;
        margin-right: 10px;
      }
    }

    .gallery-container {
      width: 100%;
      margin-top: 25px;
    }
  }
`;

export default MyWorkContentStyles;
