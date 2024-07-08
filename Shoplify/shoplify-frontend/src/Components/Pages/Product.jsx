import React from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/Context";
import Breadcrum from "../Breadcrum/Breadcrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import DescriptionBox from "../DescriptionBox/Descriptionbox";
import Popular from "../Popular/Popular";
const Product = () => {
    const { all_products } = React.useContext(ShopContext);
    const { id } = useParams();
    const product = all_products.find((e) => {
        return e.id === Number(id) ? e : null;
    });
    return (
        <div>
            <Breadcrum product={product} />;
            <ProductDisplay product={product} />
            <DescriptionBox />
            <Popular header="Related Products"/>
        </div>
    );
};

export default Product;
