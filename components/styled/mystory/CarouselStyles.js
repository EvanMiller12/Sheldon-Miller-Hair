import styled from "styled-components";

const CarouselStyles = styled.div`
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

export default CarouselStyles;
