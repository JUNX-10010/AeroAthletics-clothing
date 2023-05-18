import "./navigation.styles.scss";
import {ReactComponent  as CrownLogo} from "../../assets/crown.svg";
import { Outlet, Link } from "react-router-dom";
import {
    Fragment,
    useContext
}
    from "react";
import { UserContext } from "../../contexts/user.contex";
import {
    signOutUser
} from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartContext from "../../contexts/cart.contex";

const Navagation = () => {
    const { currentUser } = useContext(UserContext);
    const { activeCart } = useContext(CartContext);



    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    <Link className="nav-link" to="/contact">CONTACT</Link>
                    {
                        currentUser ? (<span
                            className="nav-link"
                            onClick={ signOutUser }>SIGN OUT </span>)
                            : ( <Link className="nav-link" to="/auth">SIGN IN</Link> )
                    }
                    <CartIcon />
                </div>
                {
                    activeCart && <CartDropdown />
                }
            </div>
            <Outlet />
        </Fragment>
    )
};
export default Navagation;