import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/client/detailsPage/DetailsCard";
import Nav from "../../components/client/common/Nav";
import { Footers } from "../../components/client/common/Footers";
import { DrawerAddToCart } from "../../components/client/common/DrawerAddToCart";
import Skelton from "../../components/client/detailsPage/Skelton";
function DetailsPage() {
  return (
    <>
      <Nav />
      <DetailsCard />
      <DrawerAddToCart />
      {/* <Skelton /> */}
      <Footers />
    </>
  );
}

export default DetailsPage;
