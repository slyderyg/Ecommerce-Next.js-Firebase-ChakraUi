import React, {createContext, useEffect, useState} from "react";

export const CartItemContext = createContext();

const CartContext = (props) => {
   const [cartData, setCartData] = useState([]);
   const [totalPrice, setTotalPrice] = useState(0);
   const [totalQuantity, setTotalQuantity] = useState(0);

   
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

   const handleDelete = (item) => {
    setCartData(cartData.filter(el => el.id !== item))
   }

   const handleSearch = (el, newQuantity) => {
        let index = cartData.indexOf(el);
        let newCartData = [...cartData];
        newCartData[index].quantity = newQuantity;
        setCartData(newCartData);
   }

   useEffect(() => {
        let priceCounter = [...cartData];
        let counter = 0; 
        if (priceCounter.length > 1) {priceCounter.map((el) => {counter += el.price*el.quantity})}
        else if (priceCounter.length === 1) {counter = priceCounter[0].price*priceCounter[0].quantity}
        else (counter = 0);
        setTotalPrice(counter);
        let quantityCounter=0;
        if (priceCounter.length > 1) {priceCounter.map((el) => {quantityCounter += el.quantity})}
        else if (priceCounter.length === 1) {quantityCounter = priceCounter[0].quantity}
        else (quantityCounter = 0);
        setTotalQuantity(quantityCounter);
   }, [cartData]);
  

const value = {
    cartData,
    handleAddToCart,
    totalPrice,
    handleSearch,
    handleDelete,
    totalQuantity,
    setCartData
};
    return (
        <CartItemContext.Provider value={value}>{props.children}</CartItemContext.Provider>
    )
};

export default CartContext;