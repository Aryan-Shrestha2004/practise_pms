import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar"
import './AddProduct.css'

import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const navigate = useNavigate();

    //FIRST APPROACH
    const [productImage, setProductImage] = useState('');

    const[productName, setProductName] = useState('');

    const[productDescription, setProductDescription] = useState('');

    const[productMaterial, setProductMaterial] = useState('');


    console.log(productImage,productName,productDescription,productMaterial);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
        const response = await axios.post('https://6a4cb746e1cf82a4a17d7572.mockapi.io/products', {
       
             productImage,
           productName,
            productDescription,
             productMaterial
        })
        

        if (response.status === 201) {
            alert('Product added successfully!');
            setProductImage("");
            setProductName("");
            setProductDescription("");
            setProductMaterial("");
            navigate('/');
        }
        else {
            alert('Failed to add product. Please try again.');
        }
    }
         catch (error) {
    console.error(error);
    alert("Something went wrong!");
}
    };




  return (
    <>
    <Navbar />
    

<div className="container">

    <h2>Product Information</h2>

    <form onSubmit={handleSubmit}>

      {/* <div className="form-group">
    <label>Product Image</label>
    <input type="file" accept="image/*" />
</div> */}

<div className="form-group">
    <label>Product Image URL</label>
    <input type="text" value={productImage} placeholder="Enter image URL" name="productImage" onChange={(e) => setProductImage(e.target.value)} />
</div>

        <div className="form-group">
            <label>Product Name</label>
            <input type="text" value={productName} placeholder="Enter product name" name="productName" onChange={(e) => setProductName(e.target.value)} />
        </div>

        <div className="form-group">
            <label>Product Description</label>
            <textarea value={productDescription} placeholder="Enter product description" name="productDescription" onChange={(e) => setProductDescription(e.target.value)}></textarea>
        </div>

        <div className="form-group">
            <label>Product Material</label>
            <input type="text" value={productMaterial} placeholder="Enter product material" name="productMaterial" onChange={(e) => setProductMaterial(e.target.value)} />
        </div>

        <button type="submit">Add Product</button>

    </form>
</div>
    </>
  )
}

export default AddProduct
