import "./cart-dropdown.styles.scss";
import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.contex";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
<<<<<<< HEAD
import { redirect, useNavigate } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems, activeCart, setActiveCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckoutSubmit = () => {
        activeCart && setActiveCart(false);
        return navigate("/checkout");
    }

=======

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
>>>>>>> f196d9747745bb0c23b7b82bd753ef14d6440a01
    return (
        <div className="cart-dropdown-container">
            {
                cartItems.length <= 0
                    ? <span className="empty-message">Your cart is empty</span>
                
                    : <div className="cart-items">
                        {
                            cartItems?.map((item) => <CartItem key={item.id} cartItem={item} /> )
                        }
                        </div>
            }
<<<<<<< HEAD
            
            <Button onClick={handleCheckoutSubmit}>GO TO CHECKOUT</Button>
            
=======
            <Button >GO TO CHECKOUT</Button>
>>>>>>> f196d9747745bb0c23b7b82bd753ef14d6440a01
        </div>
    )
};
export default CartDropdown;