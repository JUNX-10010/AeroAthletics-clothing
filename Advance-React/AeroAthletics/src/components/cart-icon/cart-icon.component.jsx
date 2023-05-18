import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import CartContext from '../../contexts/cart.contex';

const CartIcon = () => {
    const { setActiveCart, activeCart } = useContext(CartContext);

    // toggle dropdown: change activeCart to true or false
    const toggleCart = () => {
        setActiveCart(!activeCart)
    }
    return (
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;