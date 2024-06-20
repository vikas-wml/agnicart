import { getPaginationData } from "@/components/PLP/ShowProducts";
import { useEffect, useState } from "react";

export default function OnScrollPagination(props) {
  const { next, setNext, isInfiniteScrollEnabled, setProducts } = props;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [next, isLoading, isInfiniteScrollEnabled]);

  const handleScroll = async () => {
    if (!isLoading && isInfiniteScrollEnabled && next) {
      const scrollThreshold = 500;
      const scrolledToBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - scrollThreshold;
      if (scrolledToBottom) {
        setIsLoading(true);
        const data = await getPaginationData(next);

        setProducts((prevProducts) => [...prevProducts, ...data.results]);
        setNext(data.next);

        setIsLoading(false);
      }
    }
  };

  return (
    <div className="text-center pt-20">
      {isLoading && <div className=" font-semibold text-lg">Loading...</div>}
    </div>
  );
}
