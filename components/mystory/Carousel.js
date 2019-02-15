import CarouselStyles from "../styled/mystory/CarouselStyles";

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
      <CarouselStyles>
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
      </CarouselStyles>
    );
  }
}

export default Carousel;
