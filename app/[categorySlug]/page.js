import PLP from "@/components/PLP/PLP";

async function getProductsData(searchParams, params) {
  const { page } = searchParams;
  try {
    const res = await fetch(
      `https://devapi.agnicart.com/api/stores/8e23257b/products/?variants=${
        searchParams.variants || ""
      }&page=${page || 1}&${
        params.categorySlug && `section_slug=${params.categorySlug}`
      }`
    );

    // &${page && `page=${page}`}

    if (!res.ok) throw new Error("Something went wrong with fetching Api");
    const data = await res.json();
    return data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.log(error.message);
    }
  }
}

async function getFiltersData() {
  try {
    const res = await fetch(
      "https://devapi.agnicart.com/api/stores/8e23257b/variants/"
    );
    if (!res.ok) throw new Error("Something went wrong with fetching Api ");
    const data = await res.json();
    return data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.log(error.message);
    }
  }
}

export default async function Page(props) {
  const { searchParams, params } = props;
  const products = await getProductsData(searchParams, params);
  const filters = await getFiltersData();
  return (
    <div className="  bg-white">
      <PLP
        products={products}
        filters={filters}
        nextURL={products.next}
        previousURL={products.previous}
      />
    </div>
  );
}

// &${params.categorySlug && `section_slug=${params.categorySlug}`}
