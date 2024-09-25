import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import UserRouter from "./routes/UserRouter";

import { ProductDataProvider } from "./context/product-context/ProductContext/";

export default function App() {
  return (
    <ProductDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </ProductDataProvider>
  );
}
