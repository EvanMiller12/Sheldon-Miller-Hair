import styled from "styled-components";

const FilterOptionsStyles = styled.aside`
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

export default FilterOptionsStyles;
