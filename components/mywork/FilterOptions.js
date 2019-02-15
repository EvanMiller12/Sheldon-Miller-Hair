import FilterOptionsStyles from "../styled/mywork/FilterOptionsStyles";

const FilterOptions = props => {
  const { filterOptions, filterImageList } = props;
  return (
    <FilterOptionsStyles>
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
    </FilterOptionsStyles>
  );
};

export default FilterOptions;
