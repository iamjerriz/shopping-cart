import React, { useState } from "react";

interface ProductFormProps{

}


const ProductForm: React.FC<ProductFormProps> = ({}) => {

    return (
        <div>
            <h1>Add Game To The Store</h1>
            <form>
                <input type="text" placeholder="Game Title" name="title"/>
                <input type="number" placeholder="Price" name="price"/>
                <input type="number" placeholder="ID" name="id"/>
            </form>
            <button>Add Game</button>
        </div>
    )
}

export default ProductForm