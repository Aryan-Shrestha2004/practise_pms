import Navbar from "../components/Navbar/Navbar";

import "./SingleProduct.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //STORE DATA COMING FROM API/OBJECT IN STATE
  const [product, setProduct] = useState({});

  console.log(id);

  //DELETE PRODUCT FROM API
  const deleteProduct = async () => {
    //api hit to delete product
    try {
      const response = await axios.delete(
        `https://6a4cb746e1cf82a4a17d7572.mockapi.io/products/${id}`,
      );
      //   alert("Product deleted successfully");
      if (response.status === 200) {
        alert("Product deleted successfully");
        navigate("/");
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //FETCH SINGLE PRODUCT DETAILS FROM API
  const fetchsingleProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://6a4cb746e1cf82a4a17d7572.mockapi.io/products/${id}`,
      );
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchsingleProductDetails();
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="single-product">
        <div className="product-image">
          <img src={product.productImage} alt={product.productName} />
        </div>

        <div className="product-details">
          <h1>{product.productName}</h1>

          <p>{product.productDescription}</p>

          <h3>
            <strong>Material:</strong> {product.productMaterial}
          </h3>

          <button onClick={deleteProduct}>Delete Product</button>

          <button onClick={() => navigate(`/editProduct/${id}`)}>
            Edit Product
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
