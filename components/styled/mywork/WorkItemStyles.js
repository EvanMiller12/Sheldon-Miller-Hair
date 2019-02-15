import styled from "styled-components";

const WorkItemStyles = styled.li`
  li:hover .info-contain {
    display: block;
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

export default WorkItemStyles;
