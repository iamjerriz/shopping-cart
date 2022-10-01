import React, { useState } from "react";

interface ProductsListProps{

}

interface Product {
    title: string;
    price: number;
    id: number
}

const intialProducts = [
    { title: "Ragnarok", price: 99, id: 1 },
    { title: "Tekken", price: 199, id: 2 },
    { title: "GTA V", price: 299, id: 3 },
]

const ProductsList: React.FC<ProductsListProps> = ({}) => {

    const [ products, setProducts ] = useState<Product[]>(intialProducts)

    return (
        <div>
            <h1>Games List</h1>
            {
                intialProducts.map(product => 
                <div key={product.id}>
                    <span>{product.title}</span>&nbsp; : &nbsp;<span>{product.price}</span>
                </div>
                )
            }

            <button onClick={() => setProducts( prevProducts => [{
                title: "Street Fighter", 
                price: 599,
                id: 4
            },...prevProducts])}>Add Product</button>
        </div>
    )
}

export default ProductsList