import React, {createContext, useState} from "react";

export const CartItemContext = createContext();

const CartContext = (props) => {
   const [cartData, setCartData] = useState([]);

   
   const handleAddToCart = (productName, productPrice, productDescription, imageUrl, id) => {
        setCartData([...cartData, {
            name: productName,
            price: productPrice,
            description: productDescription,
            imageUrl: imageUrl,
            id: id,
           }
        ])
   };

const value = {
    cartData,
    handleAddToCart
};
    return (
        <CartItemContext.Provider value={value}>{props.children}</CartItemContext.Provider>
    )
};

export default CartContext;