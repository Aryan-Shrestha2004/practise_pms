import './Home.css'
import Navbar from "./components/Navbar/Navbar";
import axios from 'axios'
import { useState, useEffect } from "react";


const Home = () => {

const [products, setProducts] = useState([]);


    const fetchProducts = async () => {
       const response = await axios.get('https://6a4cb746e1cf82a4a17d7572.mockapi.io/products')
       console.log(response.data);
       setProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
        // const fetchData = async () => {
        //     try {
        //         const response = await axios.get('https://api.example.com/products');
        //         console.log(response.data);
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // };
        // fetchData();
    }, []);
    

  return (
    <>
    <Navbar />
        {/* <div className="card">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" alt="Product"/>

        <div className="card-content">
            <h2>Running Shoes</h2>
            <p>
                Lightweight and comfortable running shoes designed for
                everyday training with excellent grip and cushioning.
            </p>

            <button>View Product</button>
        </div>
  
    </div> */}


{products.map((product) => {
  return (
    <div className="card" key={product.id}>
      {/* <img src={product.productImage} alt={product.productName} /> */}

      <div className="card-content">
        <h2>{product.productName}</h2>
                <img src={product.productImage} alt={product.productName} />




        <p>{product.productDescription}</p>

        <button>View Product</button>
      </div>
    </div>
  );
})}
    </>  
  )
}


export default Home
