import React from "react";
import Product from "./Product/Product";
import "./Products.scss";

const Products = () => {
    return (
        <div className="product-container">
            <div className="sec-head">
                <div className="products">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </div>
    );
};

export default Products;
