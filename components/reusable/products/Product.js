import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { IoStar } from "react-icons/io5";

export default function Product(props) {
  const {
    id,
    title,
    description,
    price,
    reference_price,
    img,
    rating,
    ratingCount,
  } = props;
  return (
    <Link
      key={id}
      className=" flex flex-col items-start justify-center gap-2  group relative cursor-pointer   "
      href={`product/${id}`}
    >
      <img src={img} alt="" className="w-full h-full " />
      <h1 className=" text-start px-2 capitalize font-semibold text-lg">
        {title}
      </h1>
      <p className="text-slate-500 px-2 py-2 capitalize line-clamp-1  group-hover:invisible">
        {description}
      </p>
      <span className=" text-slate-600 absolute bottom-9 left-2   text-xs    invisible  group-hover:visible   font-semibold">
        Size: S,M,L,XL,XX-Large
      </span>
      <div className="flex items-center justify-center gap-0">
        <span className=" font-semibold text-start px-2  ">&#8377;{price}</span>

        <strike className=" font-semibold text-start px-2 text-slate-400">
          &#8377;{reference_price}
        </strike>
      </div>
      {/* <div>
        {rating && (
          <span className=" flex items-center justify-center gap-1 border border-white bg-white px-2 py-1 rounded-full bottom-32 right-3 absolute ">
            {Array.from({ length: rating }, (i) => (
              <IoStar color="#ffc107" />
            ))}
            {ratingCount}
          </span>
        )}
      </div> */}
      <span className="border border-white bg-white px-1 py-1 rounded-full top-2 right-4 absolute ">
        <CiHeart size="1.5rem" />
      </span>
    </Link>
  );
}
