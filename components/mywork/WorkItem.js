import WorkItemStyles from "../styled/mywork/WorkItemStyles";

const WorkItem = props => {
  const { imageList } = props;

  return imageList.map((item, index) => {
    return (
      <WorkItemStyles key={index}>
        <div className="info-contain">
          <div className="style-info">
            <h3>{item.category}</h3>
          </div>
        </div>
        <img src={item.image} alt="" />
      </WorkItemStyles>
    );
  });
};

export default WorkItem;
