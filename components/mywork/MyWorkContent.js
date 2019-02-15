import MyWorkContentStyles from "../styled/mywork/MyWorkContentStyles";

const MyWorkContent = props => (
  <MyWorkContentStyles>
    <div className="contain">
      {props.renderFilterOptions()}
      <div className="gallery-container">
        <ul className="gallery-list">{props.renderWork()}</ul>
      </div>
    </div>
  </MyWorkContentStyles>
);

export default MyWorkContent;
