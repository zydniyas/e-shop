import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import UserRouter from "./routes/UserRouter";

import { ProductDataProvider } from "./context/product-context/ProductContext/";
import { UserDataProvider } from "./context/user-context/UserContext/";

export default function App() {
  return (
    <BrowserRouter>
      <UserDataProvider>
        <ProductDataProvider>
          <Routes>
            <Route  path="/*" element={<UserRouter />}></Route>
          </Routes>
        </ProductDataProvider>
      </UserDataProvider>
    </BrowserRouter>
  );
}
