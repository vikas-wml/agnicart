"use client";
import React from "react";
import Filters from "./Filters";
import ShowProducts from "./ShowProducts";

export default function PLP({ products, filters, nextURL, previousURL }) {
  return (
    <div className="w-full lg:w-[80%]  mx-auto px-4 lg:px-0  py-[50px] z-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-start justify-between gap-10 relative">
        <Filters filters={filters} />
        <ShowProducts
          count={products && products.count}
          productsData={
            products && products.results.length > 0 ? products.results : []
          }
          nextURL={nextURL}
          previousURL={previousURL}
        />
      </div>
    </div>
  );
}
