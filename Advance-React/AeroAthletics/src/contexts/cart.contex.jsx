import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({
    cartItems: [],
    activeCart: false,
    setActiveCart: () => {}


})

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [activeCart, setActiveCart] = useState(false);

    const value = { cartItems, setCartItems, activeCart, setActiveCart };


    return (<CartContext.Provider value={value}>{ children }</CartContext.Provider> )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CartContext;