import React, { useContext } from "react";
import Banner from "../../components/client/home/Banner";
import Nav from "../../components/client/common/Nav";
import ProductCard from "../../components/client/common/ProductCard";
import CartContext from "../../context/cart-context/CartContext";
import { DrawerAddToCart } from "../../components/client/common/DrawerAddToCart";
import { Footers } from "../../components/client/common/Footers";
import ProductGallary from "../../components/client/home/ProductGallary";

function HomePage() {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      <Nav />
      <DrawerAddToCart />
      <Banner />
      <ProductCard />
      <ProductGallary />
      <Footers />
    </div>
  );
}

export default HomePage;
