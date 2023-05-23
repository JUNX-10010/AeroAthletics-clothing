import { createContext, useState, useEffect} from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({
    cartCount: 0,
    cartItems: [],
    activeCart: false,
    cartTotal: 0,
    setCartTotal: () => {},
    setcartCount: () => {},
    setCartItems: () => {},
    setActiveCart: () => {},
    removeItemFromCart: () => {},
    addItemToCart: () => {},
    clearItemFromCart: () => {},


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
                const updatedCartQuantity = { ...cartItem, quantity: cartItem.quantity + 1 }
                const itemTotal = updatedCartQuantity.price * updatedCartQuantity.quantity;
                const updateItemTotal = { ...updatedCartQuantity, itemTotal: itemTotal }
                return updateItemTotal;
            }
            

            return cartItem;
                } )
        )
    }


    // if not found, add product to cart
    return [...cartItems, { ...productToAdd, quantity: 1, itemTotal: productToAdd.price }]
};
// create helper function to remove quantity from cart
const removeCartItem = (cartItems, cartItemToRemove) => {
    // check if cartItems contains productToAdd
    const exestingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );


    // if quantity is equal to 1, remove item from cart
    if (exestingCartItem.quantity === 1) {
        return (
            cartItems.filter( (cartItem) => cartItem.id !== cartItemToRemove.id)
        )
    }


    // return cart items with matching id and reduce quantity by 1
    // update price as well
    return cartItems.map(cartItem => {
        if (cartItem.id === cartItemToRemove.id) {
            const updatedCartQuantity = { ...cartItem, quantity: cartItem.quantity - 1 }
            const itemTotal = updatedCartQuantity.itemTotal - updatedCartQuantity.price;
            const updateItemTotal = { ...updatedCartQuantity, itemTotal: itemTotal }
            return updateItemTotal;

        }
        return cartItem;
    }
    );
};

const clearItemFromCart = (cartItems, cartItemToClear) => {

    const exestingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToClear.id
    );

    // if quantity is equal to 1, remove item from cart
    if (exestingCartItem) {
        return (
            cartItems.filter( (cartItem) => cartItem.id !== cartItemToClear.id)
        )
    }

}

const UpdateCartTotal = (cartItems) => {
    return cartItems.map((cartItem) => cartItem.itemTotal)
        .reduce((acc, itemTotal) => acc + itemTotal, 0);
}

export const CartProvider = ({ children }) => {
    const [cartCount, setcartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [activeCart, setActiveCart] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
      const newCartCount = () => {setcartCount(updatecartCount(cartItems))}
    newCartCount();

  }, [cartItems])
    
  useEffect(() => {
      const addCartTotal = () => {setCartTotal(UpdateCartTotal(cartItems))}
    addCartTotal();

  },[cartItems])

    const addItemToCart = (productToAdd) => { 
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };

    const clearCartItem = (productToRemove) => {
        setCartItems(clearItemFromCart(cartItems, productToRemove));
    };
    
    const value = {
        cartItems,
        activeCart,
        setActiveCart,
        addItemToCart, 
        removeItemFromCart,
        cartCount, 
        setcartCount,
        clearCartItem,
        cartTotal
    };

    return (<CartContext.Provider value={value}>{ children }</CartContext.Provider> )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CartContext;