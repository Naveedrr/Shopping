import React from "react";
import ProductList from "../ProductList";
import CartSummary from "../CartSummary";
import CartItems from "../CartItems";
import GiftProgress from "../GiftProgress";
import { useCart } from "../../hooks/useCart";
import "./index.css"

const ShoppingCart = () => {
    const {
    cartItems,
    cartSubtotal,
    addToCart,
    updateCartQuantity,
    progress,
    amountAwayFromGift,
    hasQualifyFreeGift
     } = useCart();

    return (
        <div className="shopping-cart">
            <h1 className="shopping-cart__title">Shopping Cart</h1>
            <ProductList addToCart={addToCart} />
            {cartSubtotal > 0 && !hasQualifyFreeGift && (
                <GiftProgress 
                amountAwayFromGift={amountAwayFromGift}
                progress={progress} />
            )}
            <CartSummary 
            cartItems = {cartItems}
            cartSubtotal = {cartSubtotal}
            hasQualifyFreeGift={hasQualifyFreeGift} />

            {cartItems.length > 0 && (
                <CartItems
                cartItems = {cartItems}
                updateCartQuantity={updateCartQuantity} />
            )}
        </div>
    )
}

 

export default ShoppingCart



