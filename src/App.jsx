import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import UserRouter from "./routes/UserRouter";

import { ProductDataProvider } from "./context/product-context/ProductContext/";
import { UserDataProvider } from "./context/user-context/UserContext/";
import { CartDataProvider } from "./context/cart-context/CartContext";

export default function App() {
  return (
    <BrowserRouter>
      <UserDataProvider>
        <ProductDataProvider>
          <CartDataProvider>
            <Routes>
              <Route path="/*" element={<UserRouter />}></Route>
            </Routes>
          </CartDataProvider>
        </ProductDataProvider>
      </UserDataProvider>
    </BrowserRouter>
  );
}
