import { useState,useEffect } from "react";
import { PRODUCTS,THRESHOLD,FREE_GIFT } from "../constants/product";
export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [productQuantities,setProductQuantities] = useState(
        PRODUCTS.reduce((acc,product) => {
            acc[product.id] = 1;
            return acc
        }, {})
    )


// exclude free gift

const cartSubtotal = cartItems.filter(item => !item.isFreeGift)
.reduce((sum,item) => sum + item.price * item.quantity, 0);


// progress free gift
const progress = Math.min((cartSubtotal / THRESHOLD) * 100, 100);
const amountAwayFromGift = Math.max(THRESHOLD - cartSubtotal, 0);
const hasQualifyFreeGift = cartItems.some(item => item.isFreeGift);
    useEffect(() => {
        
        
        

        if (cartSubtotal >= THRESHOLD && !hasQualifyFreeGift){
            // add free gift
            setCartItems(prevItems =>[
                ...prevItems,{...FREE_GIFT,quantity:1}
            ])
        } else if (cartSubtotal < THRESHOLD && hasQualifyFreeGift){
            //Remove free gift
            setCartItems(prevItems => prevItems.filter(item => !item.isFreeGift));
        }
    },[cartSubtotal]);
    
    //carthandle

    const addToCart = (product) => {
        const quantity = productQuantities[product.id] || 1;
        const presentIndex = cartItems.findIndex(item =>
            item.id === product.id
        )
        if (presentIndex >= 0){
            // update present item
            const updatedCartItems = [...cartItems];
            updatedCartItems[presentIndex].quantity += quantity;
            setCartItems(updatedCartItems)
        } else {
            //add newitem
            setCartItems([...cartItems,{...product,quantity}])
        }
    };

    const updateCartQuantity = (productId,newQuantity) => {
        if (newQuantity <= 0){
            removeFromCart(productId);
            return;
        }
        setCartItems (cartItems.map(item => 
            item.id === productId? {...item,quantity:newQuantity}:item
        ));
        
    };

    const removeFromCart = (productId) => {
        // not allow free gift 
        if (cartItems.find(item => item.id === productId)?.isFreeGift){
            return;
        }
        setCartItems(cartItems.filter(item => item.id !== productId))
    };
    return{
        cartItems,
        cartSubtotal,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        progress,
        amountAwayFromGift,
        hasQualifyFreeGift
    };
};
