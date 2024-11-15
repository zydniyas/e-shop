import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

const ProductContext = createContext({});

export const ProductDataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productCategorys, setproductCategorys] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err.message);
            });
        axios
            .get("https://dummyjson.com/products/categories")
            .then((response) => {
                setproductCategorys(response.data);
                console.log("productCategorys :", response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    return (
        <ProductContext.Provider value={{ products, productCategorys }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
