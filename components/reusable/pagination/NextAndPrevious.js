import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NextAndPrevious({
  handlePagination,
  isLoading,
  hasPrevious,
  hasNext,
}) {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (searchParams.has("page")) {
      const page = parseInt(searchParams.get("page")) || 1;

      setCurrentPage(page);
    } else {
      setCurrentPage(1);
    }
  }, [searchParams]);

  const handleClick = (direction) => {
    let newPage = currentPage;

    if (direction === "previous" && hasPrevious) {
      newPage = Math.max(currentPage - 1, 1);
    } else if (direction === "next" && hasNext) {
      newPage = currentPage + 1;
    }

    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", newPage);

    router.push(`${path}?${newSearchParams.toString()}`);

    handlePagination(direction);
  };

  return (
    <div className="flex justify-center text-center space-x-4 pt-20">
      <button
        onClick={() => handleClick("previous")}
        disabled={isLoading || !hasPrevious}
        className="text-black border p-2 px-5 py-2 font-semibold flex items-center justify-center gap-1 rounded-md bg-white shadow-md w-[150px] "
      >
        <ArrowBigLeft className="text-black" />
        {isLoading ? "Loading" : "Previous"}
      </button>
      <button
        onClick={() => handleClick("next")}
        disabled={isLoading || !hasNext}
        className="text-black border  px-5 py-2 font-semibold flex items-center justify-center gap-1 rounded-md bg-white shadow-md w-[150px]"
      >
        {isLoading ? "Loading" : "Next"}
        <ArrowBigRight className="text-black" />
      </button>
    </div>
  );
}
