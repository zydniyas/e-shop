import React from "react";
import Banner from "../../components/client/home/Banner";
import Nav from "../../components/client/common/Nav";
import ProductCard from "../../components/client/common/ProductCard";

function HomePage() {
  return (
    <div>
      <Nav />
      <Banner />
      <div className="grid grid-cols-4 gap-5 p-5 py-20 max-w-max mx-auto">
        <ProductCard />
      </div>
    </div>
  );
}

export default HomePage;
