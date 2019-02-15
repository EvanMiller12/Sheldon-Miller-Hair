import Link from "next/link";
import StoryContentStyles from "../styled/mystory/StoryContentStyles";

const StoryContent = () => (
  <StoryContentStyles>
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
          nostrum dignissimos odit consectetur quam ipsum nisi fuga quaerat sed
          magni expedita et, sapiente ducimus, fugit commodi nobis cupiditate
          impedit saepe?
        </p>
      </div>
    </div>
  </StoryContentStyles>
);

export default StoryContent;
