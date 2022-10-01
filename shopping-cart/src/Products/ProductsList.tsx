import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "./products.slice";

interface ProductsListProps{

}



const ProductsList: React.FC<ProductsListProps> = ({}) => {

    const Products = useSelector(getProductsSelector)

    return (
        <div>
            <h1>Games List</h1>
            {
                Products.map(product => 
                <div key={product.id}>
                    <span>{product.title}</span>&nbsp; : &nbsp;<span>{product.price}</span>
                </div>
                )
            }
        </div>
    )
}

export default ProductsList