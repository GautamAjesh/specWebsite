import React, {useState} from "react";
import Header from "./components/js_file/Header";
import ProductDetail from "./components/js_file/ProductDetail";
import ProductSearch from "./components/js_file/ProductSearch";
import Middle from "./components/js_file/middle";
import Footer from "./components/js_file/footer";


const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    return (
        <div>
            <Header cartItems={cartItems} />
            <ProductSearch addToCart={addToCart} />
            <ProductDetail allProducts={cartItems} />
            <Middle />
            <Footer />
        </div>
    );
}
export default App;
