import React, { useState } from "react";
import { useAppDispatch } from "../store.hooks";
import { addProduct, Product } from "./products.slice";

interface ProductFormProps{

}


    const ProductForm: React.FC<ProductFormProps> = ({}) => {


    const dispatch = useAppDispatch()

    const [product, setProduct] = useState<Product>({
        title: '',
        price: 0,
        id: 0,
    })

    const handleChange = ( {target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => setProduct(prev => {
        (prev as any)[name] = value;
        const newValue = {...prev}
        return newValue;
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
       dispatch(addProduct(product))
    }

    const {title, price, id} = product

    return (
        <div>
            <h1>Add Game To The Store</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Game Title" name="title" value={title} onChange={handleChange}/>
                <input type="number" placeholder="Price" name="price" value={price} onChange={handleChange}/>
                <input type="number" placeholder="ID" name="id" value={id} onChange={handleChange}/>
                <button type="submit">Add Game</button>
            </form>
        </div>
    )
}

export default ProductForm