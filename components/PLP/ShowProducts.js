"use client";
import Product from "../reusable/products/Product";
import GenericPagination from "../reusable/pagination/GenericPagination";
import { useEffect, useState } from "react";

export async function getPaginationData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok)
      throw new Error("Something went wrong with fetching product data ");
    const data = await res.json();
    return data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.log(error.message);
    }
  }
}

export default function ShowProducts({
  productsData,
  count,
  previousURL,
  nextURL,
}) {
  // const productList = [
  //   {
  //     pid: "3fd0124f",
  //     img: "/saree1.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  //   {
  //     pid: "c2f7b78b",
  //     img: "/saree2.webp",
  //     rating: 1,
  //     ratingCount: 2,
  //   },
  //   {
  //     pid: "2e476c4d",
  //     img: "/saree3.webp",
  //     rating: null,
  //     ratingCount: null,
  //   },
  //   {
  //     pid: "a3ca886f",
  //     img: "/saree4.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  //   {
  //     pid: "c0be623f",
  //     img: "/saree5.webp",
  //     rating: 1,
  //     ratingCount: 3,
  //   },
  //   {
  //     pid: "5e243056",
  //     img: "/saree6.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  //   {
  //     pid: "0945c01c",
  //     img: "/saree7.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  //   {
  //     pid: "79cdb464",
  //     img: "/saree8.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  //   {
  //     pid: "c5ff7769",
  //     img: "/saree9.webp",
  //     rating: null,
  //     ratingCount: null,
  //   },
  //   {
  //     pid: "70879e34",
  //     img: "/saree10.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  //   {
  //     pid: "ce94fa60",
  //     img: "/saree11.webp",
  //     rating: 1,
  //     ratingCount: 2,
  //   },
  //   {
  //     pid: "0160bae0",
  //     img: "/saree12.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  //   {
  //     pid: "62522c30",
  //     img: "/saree13.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  //   {
  //     pid: "e9f1eb66",
  //     img: "/saree14.webp",
  //     rating: null,
  //     ratingCount: null,
  //   },
  //   {
  //     pid: "716ce40d",
  //     img: "/saree15.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  //   {
  //     pid: "224ee29f",
  //     img: "/saree16.webp",
  //     rating: 1,
  //     ratingCount: 3,
  //   },
  //   {
  //     pid: "2c8cd11d",
  //     img: "/saree17.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  //   {
  //     pid: "eaa19f63",
  //     img: "/saree18.webp",
  //     rating: 1,
  //     ratingCount: 4,
  //   },
  //   {
  //     pid: "17f54bbf",
  //     img: "/saree19.webp",
  //     rating: null,
  //     ratingCount: null,
  //   },
  //   {
  //     pid: "4cbd63ab",
  //     img: "/saree20.webp",
  //     rating: 1,
  //     ratingCount: 5,
  //   },
  // ];

  const [products, setProducts] = useState(productsData || []);
  const [isLoading, setIsLoading] = useState(false);
  const [next, setNext] = useState(nextURL || null);
  const [previous, setPrevious] = useState(previousURL || null);
  const [isInfiniteScrollEnabled, setIsInfiniteScrollEnabled] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setProducts(productsData || []);
    setNext(nextURL || null);
    setPrevious(previousURL || null);
  }, [productsData, previousURL, nextURL, count]);

  const handlePagination = async (options) => {
    const direction = options;
    setIsLoading(true);
    setIsInfiniteScrollEnabled(false);

    let url;
    if (direction === "next" && next) {
      url = next;
    } else if (direction === "previous" && previous) {
      url = previous;
    }

    if (url) {
      const data = await getPaginationData(url);

      setProducts(data.results);
      setNext(data.next);
      setPrevious(data.previous);
      setCurrentPage(data.currentPage);
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full mx-auto  md:col-span-1 lg:col-span-3">
      <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full ">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Product
              key={product.uid}
              id={product.uid}
              title="Agni Originals"
              description={product.slug}
              price={product.price}
              reference_price={product.reference_price}
              img={product.featured_image}
            />
          ))
        ) : (
          <h1 className=" text-lg font-bold w-full top-0 left-0 translate-x-96 translate-y-56 border px-3 py-4 shadow-md ">
            No Products Available!
          </h1>
        )}
      </div>
      <GenericPagination
        handlePagination={handlePagination}
        isLoading={isLoading}
        hasPrevious={previous !== null}
        hasNext={next !== null}
        products={products}
        count={count}
        setNext={setNext}
        next={next}
        type="NUMBERED"
        isInfiniteScrollEnabled={isInfiniteScrollEnabled}
        setIsInfiniteScrollEnabled={setIsInfiniteScrollEnabled}
        setProducts={setProducts}
        current={currentPage}
      />
    </div>
  );
}
