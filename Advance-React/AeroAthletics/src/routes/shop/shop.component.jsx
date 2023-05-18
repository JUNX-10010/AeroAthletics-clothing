import './shop.styles.scss';
import { useContext } from "react";
import { ProductsContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="products-container">
            {
                products.map(products => {
                    return (
                        <ProductCard
                            key={products.id}
                            products={products}
                            
                        />
                    )
                })
            }
        </div>

    )
};

export default Shop;