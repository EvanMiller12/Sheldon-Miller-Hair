import Link from "next/link";
import styled from "styled-components";
import NavigationOptions from "../components/home/NavigationOptions";
import Carousel from "../components/mystory/Carousel";

const StyledStoryPage = styled.main``;
const StyledStorySection = styled.section`
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

const MyStory = () => (
  <StyledStoryPage>
    <StyledStorySection>
      <Carousel />
      <div className="story-content-wrapper">
        <h2>Hi, I'm Sheldon</h2>
        <p className="subheading">
          6 years of professional experience
          <Link href="mywork">
            <a>View My Work</a>
          </Link>
        </p>
        <div className="story-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            accusamus id voluptates dolores? Ex nobis culpa, cupiditate eveniet
            sed sequi quibusdam dignissimos qui inventore laudantium voluptatem.
            Deserunt culpa corrupti laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            exercitationem, nobis reiciendis id laboriosam eveniet nulla commodi
            sunt corrupti modi facilis quo aliquid, blanditiis quam, ipsum totam
            dolor minus eaque.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
            nostrum dignissimos odit consectetur quam ipsum nisi fuga quaerat
            sed magni expedita et, sapiente ducimus, fugit commodi nobis
            cupiditate impedit saepe?
          </p>
        </div>
      </div>
    </StyledStorySection>
    <NavigationOptions />
  </StyledStoryPage>
);

export default MyStory;
