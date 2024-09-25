import React from "react";
import Banner from "../../components/client/home/Banner";
import Nav from "../../components/client/common/Nav";
import ProductCard from "../../components/client/common/ProductCard";

function HomePage() {
  return (
    <div>
      <Nav />
      <Banner />
      <div className="">
        <ProductCard />
      </div>
    </div>
  );
}

export default HomePage;
