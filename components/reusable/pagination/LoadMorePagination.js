export default function LoadMorePagination({
  handlePagination,
  isLoading,
  hasNext,
}) {
  const handleClick = () => {
    if (!isLoading && hasNext) {
      handlePagination("next");
    }
  };
  return (
    <div className="text-center pt-20">
      <button
        onClick={handleClick}
        disabled={isLoading || !hasNext}
        className="text-black border  px-5 py-2 font-semibold rounded-md bg-white shadow-md w-[150px]"
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
