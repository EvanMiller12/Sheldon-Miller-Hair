import styled from "styled-components";

const StoryContentStyles = styled.section`
  .story-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 91.5%;
    margin: 0 auto;
    h2 {
      margin: 0;
    }
  }

  .subheading {
    text-align: center;
    margin-top: 0;

    a {
      display: inline-block;
      margin-left: 5px;
      font-family: "Lobster", cursive;
      font-size: inherit;
      color: ${props => props.theme.coral};
      border-bottom: 1px solid ${props => props.theme.lightGrey};
    }
  }

  .story-content {
    width: 50%;
  }

  @media (max-width: 1024px) {
    .story-content {
      width: 75%;
    }
  }

  @media (max-width: 696px) {
    .story-content {
      width: 85%;
      text-align: center;
    }
  }
`;

export default StoryContentStyles;
