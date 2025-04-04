import React from "react";
import { PRODUCTS } from "../../constants/product";
import "./index.css"

const ProductList = ({addToCart}) => {
    return (
        <div className = "product-list">
            <h2 className="product-list__title">Products</h2>
            <div className="product-list__grid">{PRODUCTS.map(product => (
                <div key = {product.id} className = "product-card">
                    <div 
            className="product_card__name">{product.name}</div>
            <div className="product_card__price">₹{product.price}</div>
            <button className="product-card__button" onClick ={() => addToCart(product)}>Add to Cart</button>
        </div>
    ))}
    </div>
    </div>
    );
};

export default ProductList;