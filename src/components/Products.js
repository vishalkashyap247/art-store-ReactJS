import React from "react";
import { products } from "../projectData/products";
import "../styles/products.css";
import ProductCard from "./ProductCard";

function Products() {
  function createCard(list){
    // console.log(list);
    return(
      <ProductCard key={list.key} id={list.key} title={list.title} description={list.description} link={list.link}  rating={list.rating} price={list.price} extra={list.extra} />
    );
  }
  return (
    <div className="container fluid">
      <h2 className="myDesc">Products</h2>
      <hr></hr>
      <table className="table">
        <tbody>
        {products.map(createCard)}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
