import PDP from "@/components/PDP/PDP";

async function getProductInfo(params, variantParams) {
  try {
    const res = await fetch(
      `https://devapi.agnicart.com/api/stores/8e23257b/products/${params.uid}/?${variantParams}`
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
  const { params, searchParams } = props;
  console.log(props, "props");
  const variant = searchParams;
  const variantParams = variant
    ? Object.entries(variant)
        .map(([key, value]) => `variant=${value}`)
        .join("&")
    : "";
  const productInfo = await getProductInfo(params, variantParams);

  return (
    <div>
      <PDP info={productInfo} />
    </div>
  );
}
