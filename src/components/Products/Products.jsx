import "./Products.css";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "../ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch";
import FilterOptions from "../FilterOptions/FilterOptions";

const Products = () => {
  const [hideFilter, setHideFilter] = useState(true);
  const handleHideFilter = () => {
    setHideFilter(!hideFilter);
  };

  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  return (
    <section className="section-products">
      <div className="products-head">
        <div className="border"></div>
        <div className="products-head-container">
          <div className="item-count-filter">
            <h3 className="item-count">3425 Items</h3>

            {hideFilter ? (
              <div className="filter-toggle" onClick={handleHideFilter}>
                <MdKeyboardArrowLeft className="filter-arrow" />
                <p className="toggle-text">Show Filter</p>
              </div>
            ) : (
              <div className="filter-toggle" onClick={handleHideFilter}>
                <MdKeyboardArrowRight className="filter-arrow" />
                <p className="toggle-text">Hide Filter</p>
              </div>
            )}
          </div>

          <div className="dropdown-container">
            <select id="dropdown" className="dropdown">
              <option>RECOMMENDED</option>
              <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE: HIGH TO LOW</option>
              <option>PRICE: LOW TO HIGH</option>
            </select>
          </div>
        </div>
        <div className="border"></div>
      </div>

      <div className="products">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : products ? (
          <div className="product-container">
            {hideFilter ? (
              <div className="product-grid">
                {products.length > 0 &&
                  products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                  ))}
              </div>
            ) : (
              <div className="product-main-container">
                <FilterOptions />
                <div className="main-product-grid">
                  {products.length > 0 &&
                    products.map((product) => (
                      <ProductCard product={product} key={product.id} />
                    ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="no-data">No data available</div>
        )}
      </div>
    </section>
  );
};

export default Products;
