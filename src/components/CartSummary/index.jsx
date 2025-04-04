import React from "react";
import "./index.css"

const CartSummary = ({cartItems, cartSubtotal,hasQualifyFreeGift}) => {
    return (
        <div className="cart-summary">
            <h2>Cart Summary</h2>
            {cartItems.length === 0 ? (
                <div className="cart-summary__empty">
                    Your cart is empty
                </div>
            ) : (
                <div className="cart-summary__content">
                    <div className="cart-summary__subtotal">
                        <span>Subtotal:</span>
                        <span
                        className="cart-summary__subtotal-amount">₹{cartSubtotal}</span>
                    </div>

                    {hasQualifyFreeGift && (
                        <div className="cart-summary__free-gift-message">
                           You got a free Wireless Mouse!
                           </div>
                    )}
                </div>
            )}
        </div>
    )
}
    
export default CartSummary;