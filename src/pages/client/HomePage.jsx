import React, { useContext } from "react";
import Banner from "../../components/client/home/Banner";
import Nav from "../../components/client/common/Nav";
import ProductCard from "../../components/client/common/ProductCard";
import CartContext from "../../context/cart-context/CartContext";
import { DrawerAddToCart } from "../../components/client/common/DrawerAddToCart";
import { Footers } from "../../components/client/common/Footers";

function HomePage() {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <Nav />
      <DrawerAddToCart />
      <Banner />
      <div className="grid grid-cols-4 gap-5 p-5 py-20 max-w-max mx-auto">
        <ProductCard />
      </div>
      <Footers />
    </div>
  );
}

export default HomePage;
