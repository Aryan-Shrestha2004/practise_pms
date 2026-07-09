import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Home/components/Navbar/Navbar";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productImage, setProductImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productMaterial, setProductMaterial] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://6a4cb746e1cf82a4a17d7572.mockapi.io/products/${id}`,
        );

        setProductImage(response.data.productImage);
        setProductName(response.data.productName);
        setProductDescription(response.data.productDescription);
        setProductMaterial(response.data.productMaterial);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://6a4cb746e1cf82a4a17d7572.mockapi.io/products/${id}`,
        {
          productImage,
          productName,
          productDescription,
          productMaterial,
        },
      );

      alert("Product Updated Successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Edit Product Information</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Image URL</label>
            <input
              type="text"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
              placeholder="Enter image URL"
            />
          </div>

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
            />
          </div>

          <div className="form-group">
            <label>Product Description</label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter product description"
            ></textarea>
          </div>

          <div className="form-group">
            <label>Product Material</label>
            <input
              type="text"
              value={productMaterial}
              onChange={(e) => setProductMaterial(e.target.value)}
              placeholder="Enter product material"
            />
          </div>

          <button type="submit">Update Product</button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
