import React, {createContext, useEffect, useState} from "react";

export const CartItemContext = createContext();

const CartContext = (props) => {
   const [cartData, setCartData] = useState([]);
   const [totalPrice, setTotalPrice] = useState(0);

   
   const handleAddToCart = (productName, productPrice, productDescription, imageUrl, id) => {
        setCartData([...cartData, {
            name: productName,
            price: Number(productPrice),
            description: productDescription,
            imageUrl: imageUrl,
            id: id,
            quantity: 1
           }
        ])
   };

   const handleSearch = (el, newQuantity) => {
        let index = cartData.indexOf(el);
        let newCartData = [...cartData];
        newCartData[index].quantity = newQuantity;
        setCartData(newCartData);

        console.log(newCartData);
   }

   useEffect(() => {
        let priceCounter = [...cartData];
        let counter; 
        if (priceCounter.length > 1) {counter = priceCounter.reduce((acc, el) => acc.price*acc.quantity + el.price*el.quantity)}
        else if (priceCounter.length === 1) {counter = priceCounter[0].price}
        else (counter = 0);
        setTotalPrice(counter);
   }, [cartData]);
  

const value = {
    cartData,
    handleAddToCart,
    totalPrice,
    handleSearch
};
    return (
        <CartItemContext.Provider value={value}>{props.children}</CartItemContext.Provider>
    )
};

export default CartContext;