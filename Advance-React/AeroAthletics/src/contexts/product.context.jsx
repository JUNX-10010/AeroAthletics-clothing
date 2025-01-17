import {
    createContext,
    useState
} from "react";
import PropTypes from "prop-types";
import SHOP_DATA from "../shop-data.json";

export const ProductsContext = createContext({
    products: []
})

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(SHOP_DATA);
    const value = { products, setProducts };


    return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>)
}

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ProductsContext;
