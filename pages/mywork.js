import Header from "../components/Header";
import FilterOptions from "../components/mywork/FilterOptions";
import WorkItem from "../components/mywork/WorkItem";
import MyWorkContent from "../components/mywork/MyWorkContent";

class MyWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryFilter: [],
      filteredImageList: null,
      filterOptions: ["color", "extensions", "highlights", "cut"],
      imageList: [
        {
          category: "color",
          image: "../static/hair1.jpg"
        },
        {
          category: "extensions",
          image: "../static/hair2.jpg"
        },
        {
          category: "highlights",
          image: "../static/hair3.jpg"
        },
        {
          category: "cut",
          image: "../static/hair2.jpg"
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
      <div>
        <Header heading="Reinvent Your" subheading="style" />
        <MyWorkContent
          renderFilterOptions={() => this.renderFilterOptions()}
          renderWork={() => this.renderWork()}
        />
      </div>
    );
  }
}

export default MyWork;
