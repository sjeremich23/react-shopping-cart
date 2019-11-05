import React from "react";
import { Route } from "react-router-dom";

import { ProductContextProvider } from "./contexts/ProductContext";
import { CartContextProvider } from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navigation />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
