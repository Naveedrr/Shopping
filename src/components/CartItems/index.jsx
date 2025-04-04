import React from "react";
import "./index.css"

const CartItems = ({cartItems,updateCartQuantity}) => {
    return (
        <div className="cart-items">
            <h2 className="cart-items__title">Cart Items</h2>
            <div className="cart-items__list">
                {cartItems.map(item => (
                    <div key = {item.id} className="cart-item">
                        <div className="cart-item__details">
                        <div className="cart-item__name">{item.name}
                            </div>
                            <div className="cart-item__price">
                            ₹{item.price} * {item.quantity} = ₹{item.price * 
                            item.quantity}
                             </div>
                            </div>

                    {item.isFreeGift ? (
                        <div className="cart-item__free-gift-badge"> FREE GIFT</div>
                    ) : (
                        <div className="cart-item__quantity-controls">
                            <button className="cart-item__quantity-button cart-item__quantity-button--decrease" 
                            onClick={() => updateCartQuantity(item.id,item.quantity - 1)}
                            >-</button>
                            <span>{item.quantity}</span>
                            <button className="cart-item__quantity-button cart-item__quantity-button--increase"
                            onClick={() => updateCartQuantity(item.id,item.quantity + 1)}
                            >+</button>
                            </div>
                    )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartItems;