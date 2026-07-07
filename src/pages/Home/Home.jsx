import './Home.css'
import Navbar from "./components/Navbar/Navbar";

 const Home = () => {
  return (
    <>
    <Navbar />
        <div className="card">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" alt="Product"/>

        <div className="card-content">
            <h2>Running Shoes</h2>
            <p>
                Lightweight and comfortable running shoes designed for
                everyday training with excellent grip and cushioning.
            </p>

            <button>View Product</button>
        </div>
  
    </div>
    </>
  )
}

export default Home
