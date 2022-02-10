import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([products]);
  const [loading, setLoading] = useState([false]);
  // const [RsearchTerm, setRSearchTerm] = useState([]);
  // const [searchTerm, setSearchTerm] = useState();

  let componentMounted = true;

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products`).then((response) => {
      if (componentMounted) {
        setProducts(response.data);
        setFilter(response.data);
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    });
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = products.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  // const searchHandler = (searchTerm) => {
  //   setSearchTerm(searchTerm);
  //   if (searchTerm !== "") {
  //     const newProductList = products.filter((product) => {
  //       return Object.values(product)
  //         .join("")
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //     });
  //     setRSearchTerm(newProductList);
  //   } else {
  //     setRSearchTerm(products);
  //   }
  // };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="uk-button button-secondary me-2"
            onClick={() => setFilter(products)}
          >
            All
          </button>
          <button
            className="uk-button button-secondary me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="uk-button button-secondary me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="uk-button button-secondary me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="uk-button button-secondary me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map(({ id, image, title, price }) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={id}>
                  <img
                    src={image}
                    className="card-img-top"
                    alt={title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${price}</p>
                    <NavLink
                      className="navlinke-button-secondary"
                      to={`/productslist/${id}`}
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : (
            <ShowProducts />
            // <ShowProducts term={searchTerm} searchKeyWord={searchHandler} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
