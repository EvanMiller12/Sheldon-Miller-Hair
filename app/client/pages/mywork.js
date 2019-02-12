import Link from 'next/link';
import styled from 'styled-components';

const StyledMyWorkHeader = styled.header`
  padding: 50px 0;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23d49f9b' fill-opacity='0.09'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  h1 {
    position: relative;
    display: inline-block;
    padding: 0 100px;
    margin-left: 10%;
    border: 1px solid;
    span {
      position: absolute;
      right: -50px;
      bottom: -54px;
      font-family: 'Lobster', cursive;
      color: ${props => props.theme.coral};
      text-transform: lowercase;
    }
  }
`;

const StyledWorkPage = styled.main`
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

  .info-contain {
    display: none;
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
  }

  li:hover .info-contain {
    display: block;
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
const StyledFilterOptions = styled.aside`
  width: 20%;
  height: 400px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 6px 5px 14px #dedede;
  border-radius: 0.25rem;

  h5 {
    margin: 0;
    font-size: 2em;
    text-align: center;
    padding: 15px 0;
    letter-spacing: 2px;
  }
  .filter-purpose {
    background-color: ${props => props.theme.navy};
    color: #fff;
  }

  .filter-options {
    margin-left: 20px;
    font-size: 1.5em;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.theme.coral};

    input {
      margin-right: 10px;
    }
  }

  .rotate {
    -webkit-animation: spin 0.6s;
    -moz-animation: spin 0.6s;
    -o-animation: spin 0.6s;
    animation: spin 0.6s;
    transform: rotate(180deg);
  }

  .rotate-back {
    -webkit-animation: spin-back 0.6s;
    -moz-animation: spin-back 0.6s;
    -o-animation: spin-back 0.6s;
    animation: spin-back 0.6s;
    transform: rotate(0);
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @-webkit-keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @-moz-keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @-o-keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes spin-back {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  @-webkit-keyframes spin-back {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  @-moz-keyframes spin-back {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  @-o-keyframes spin-back {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  @media (max-width: 1199px) {
    .filter-products {
      margin-bottom: 50px;
    }
  }

  @media (max-width: 767px) {
    .product-categories {
      visibility: hidden;
      opacity: 0;
      height: 0;
    }
  }

  @media (min-width: 767px) {
    #product-toggler {
      display: none;
    }
  }
`;

const WorkItem = props => {
  const { imageList } = props;

  return imageList.map((item, index) => {
    return (
      <li key={index}>
        <div className="info-contain">
          <div className="style-info">
            <h3>{item.category}</h3>
          </div>
        </div>
        <img src={item.image} alt="" />
      </li>
    );
  });
};

const FilterOptions = props => {
  const { filterOptions, filterImageList } = props;
  return (
    <StyledFilterOptions>
      <div className="filter-purpose">
        <h5>
          Filter by Style
          <i id="product-toggler" className="fas fa-caret-down" />
        </h5>
      </div>
      <ul className="filter-options">
        {filterOptions.map((option, index) => {
          return (
            <li key={option}>
              <input
                className="checkbox"
                type="checkbox"
                value={option}
                id={option}
                name={option}
                onChange={option => filterImageList(option)}
              />
              <label htmlFor={option}>{option}</label>
            </li>
          );
        })}
      </ul>
    </StyledFilterOptions>
  );
};
class MyWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryFilter: [],
      filteredImageList: null,
      filterOptions: ['color', 'extensions', 'highlights', 'cut'],
      imageList: [
        {
          category: 'color',
          image: '../static/hair1.jpg'
        },
        {
          category: 'extensions',
          image: '../static/hair2.jpg'
        },
        {
          category: 'highlights',
          image: '../static/hair3.jpg'
        },
        {
          category: 'cut',
          image: '../static/hair2.jpg'
        }
      ]
    };
  }

  arrayRemove(arr, val) {
    return arr.filter(el => el !== val);
  }

  arrayFilterUpdate(arr, val) {
    if (arr.includes(val)) {
      return arr.filter(el => el !== val);
    } else {
      arr.push(val);
      return arr;
    }
  }

  arrayReset(arr, resetArr) {
    if (arr.length < 1) {
      return resetArr;
    } else {
      return resetArr.filter(item => arr.includes(item.category));
    }
  }

  filterImageList(e) {
    const { imageList } = this.state;
    let { categoryFilter } = this.state;
    categoryFilter = this.arrayFilterUpdate(categoryFilter, e.target.value);

    this.setState({
      categoryFilter: categoryFilter
    });

    this.setState({
      filteredImageList: this.arrayReset(categoryFilter, imageList)
    });
  }

  renderFilterOptions() {
    return (
      <FilterOptions
        filterImageList={options => this.filterImageList(options)}
        filterOptions={this.state.filterOptions}
      />
    );
  }

  renderWork() {
    return (
      <WorkItem
        imageList={this.state.filteredImageList || this.state.imageList}
      />
    );
  }

  render() {
    return (
      <StyledWorkPage>
        <StyledMyWorkHeader>
          <h1>
            Reinvent your <span>style</span>
          </h1>
        </StyledMyWorkHeader>
        <section>
          <div className="contain">
            {this.renderFilterOptions()}
            <div className="gallery-container">
              <ul className="gallery-list">{this.renderWork()}</ul>
            </div>
          </div>
        </section>
      </StyledWorkPage>
    );
  }
}

export default MyWork;
