import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contex";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import  Button  from "../../components/button/button.component";

const CheckOut = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                    cartItems?.map( (cartItem) => {
                        return (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} /> 
                    )
                    })
                }

        <div className="checkout-footer total">
                {cartItems.length
                    ? <div className="total">
                        <span>Total: ${cartTotal}</span>
                        <div className="checkout-button">
                            <Button>Checkout</Button>
                        </div>
                        
                        </div>
                    : <div className="empty-cart ">
                        <span>Your cart is empty</span>
                    </div>
                    
                }
        </div>
        </div>
    )
}
export default CheckOut;