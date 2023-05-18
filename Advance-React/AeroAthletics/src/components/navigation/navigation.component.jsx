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

const Navagation = () => {
    const { currentUser } = useContext(UserContext);




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
                    <Link className="nav-link" to="/cart">
                        <div className="cart">CART</div>
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
};
export default Navagation;