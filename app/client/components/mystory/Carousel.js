import styled from "styled-components";

const StyledImgSlider = styled.div`
  position: relative;

  .img-viewport {
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    ul {
      display: flex;
      justify-content: center;
      width: 90%;
      margin: 0;
      padding: 0;
      transition-duration: 0s;
      li {
        margin-right: 0;
        float: left;
        display: block;
        width: 91.5%;
        padding: 0;
        img {
          width: 100%;
          height: 550px;
          opacity: 0.9;
        }
      }
    }
    .prev-slide,
    .next-slide {
      position: absolute;
      top: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      font-size: 5em;
      padding: 0 25px;
      color: #fff;
      background-color: ${props => props.theme.coral};
    }
    .prev-slide:hover,
    .next-slide:hover {
      color: ${props => props.theme.navy};
      cursor: pointer;
    }
    .prev-slide {
      left: 5%;
    }
    .next-slide {
      right: 5%;
    }
  }

  @media (max-width: 1024px) {
    .img-viewport {
      ul {
        li {
          img {
            height: 425px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .img-viewport {
      ul {
        li {
          img {
            height: 325px;
          }
        }
      }
    }
  }

  @media (max-width: 696px) {
    .img-viewport {
      ul {
        li {
          img {
            height: 200px;
          }
        }
      }

      .prev-slide,
      .next-slide {
        height: 35px;
        padding: 0 10px;
        font-size: 2em;
      }
    }
  }
`;

const RIGHT = "-1";
const LEFT = "+1";
const IMAGES = [
  "../../static/hair1.jpg",
  "../../static/hair2.jpg",
  "../../static/hair3.jpg"
];

class Carousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      imageIdx: 0
    };
  }
  onSwiped(direction) {
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIdx = this.state.imageIdx + Number(change);
    let newIdx;
    if (adjustedIdx >= IMAGES.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = IMAGES.length - 1;
    } else {
      newIdx = adjustedIdx;
    }
    this.setState({ imageIdx: newIdx });
  }

  render() {
    const { imageIdx = 0 } = this.state;
    return (
      <StyledImgSlider>
        <div className="img-viewport">
          <ul className="slides">
            <li>
              <img src={IMAGES[imageIdx]} alt="" />
            </li>
          </ul>
          <div onClick={() => this.onSwiped(LEFT)} className="prev-slide">
            <i className="fas fa-caret-left" />
          </div>
          <div onClick={() => this.onSwiped(RIGHT)} className="next-slide">
            <i className="fas fa-caret-right" />
          </div>
        </div>
      </StyledImgSlider>
    );
  }
}

export default Carousel;
