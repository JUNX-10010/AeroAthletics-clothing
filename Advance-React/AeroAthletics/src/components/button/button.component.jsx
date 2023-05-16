import PropTypes from "prop-types";
import "./button.styles.scss";

/*
    default button component

    inverted

    google-sign-in

    children
*/


const Button = ({ children, buttonType, ...otherProps }) => {
    const BUTTON_TYPES_CLASSES = {
        google: 'google-sign-in',
        inverted: 'inverted',
    };

    return (
        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
            {...otherProps}>
            {children}
        </button>
    )

}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    buttonType: PropTypes.string,
};

export default Button;