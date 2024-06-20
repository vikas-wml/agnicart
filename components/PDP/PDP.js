"use client";

import { useEffect, useState } from "react";
import ProductInfo from "../reusable/products/ProductInfo";

const assignImages = (images, selected_variant_options) => {
  let productImages = [...images];

  if (selected_variant_options) {
    if (selected_variant_options.additional_image_2) {
      productImages.unshift({
        image: selected_variant_options.additional_image_2,
        thumbnail: selected_variant_options.additional_image_2,
      });
    }
    if (selected_variant_options.additional_image_1) {
      productImages.unshift({
        image: selected_variant_options.additional_image_1,
        thumbnail: selected_variant_options.additional_image_1,
      });
    }
    if (selected_variant_options.image) {
      productImages.unshift({
        image: selected_variant_options.image,
        thumbnail: selected_variant_options.image,
      });
      9;
    }
  }
  return productImages;
};

export default function PDP({ info }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (info && info.images) {
      setImages(assignImages(info.images, info.selected_variant_options));
    }
  }, [info]);

  return (
    <div className="w-full lg:w-[80%] mx-auto ">
      <ProductInfo data={info} images={images} />
    </div>
  );
}
