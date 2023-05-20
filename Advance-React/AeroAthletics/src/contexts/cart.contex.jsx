import { createContext, useState, useEffect} from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({
    cartCount: 0,
    setcartCount: () => {},
    cartItems: [],
    setCartItems: () => { },
    activeCart: false,
    setActiveCart: () => { },
    addItemToCart: () => { }


});
 // update cart quantity
const updatecartCount = (cartItems) => { 
    return cartItems.map((cartItem) => cartItem.quantity)
        .reduce((acc, quantity) => acc + quantity, 0);
};

// create helper function to add items to cart
const addCartItem = (cartItems, productToAdd) => {
    // check if cartItems contains productToAdd
    const exestingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    // if found, increment quantity
    if (exestingCartItem) {
        return (cartItems.map( (cartItem) => {
            if (cartItem.id === productToAdd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1}
            }
            return cartItem;
                } )
        )
    }

    // if not found, add product to cart
    return [...cartItems, { ...productToAdd, quantity: 1 }]
};

export const CartProvider = ({ children }) => {
    const [cartCount, setcartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [activeCart, setActiveCart] = useState(false);

  useEffect(() => {
    const newCartCount = () => {
      setcartCount(updatecartCount(cartItems))
    }
    newCartCount();
  },[cartItems, setcartCount])

    const addItemToCart = (productToAdd) => { 
        setCartItems(addCartItem(cartItems, productToAdd));
        
        setActiveCart(true);
        // set timeout to hide cart after 3 seconds
        // setTimeout(() => {
        //     setActiveCart(false);
        // }, 3000);
    };
    
    const value = {
        cartItems,
        activeCart,
        setActiveCart,
        addItemToCart, 
        cartCount, 
        setcartCount
    };

    return (<CartContext.Provider value={value}>{ children }</CartContext.Provider> )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CartContext;