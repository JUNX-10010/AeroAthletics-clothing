import "./cart-dropdown.styles.scss";
import { useContext } from 'react';
import { CartContext } from "../../contexts/cart.contex";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { redirect, useNavigate } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems, activeCart, setActiveCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckoutSubmit = () => {
        activeCart && setActiveCart(false);
        return navigate("/checkout");
    }

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
            
            <Button onClick={handleCheckoutSubmit}>GO TO CHECKOUT</Button>
            
        </div>
    )
};
export default CartDropdown;