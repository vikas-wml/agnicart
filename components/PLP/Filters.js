import Accordion from "../reusable/filters/Accordian";
import { CiSearch } from "react-icons/ci";
import RecursiveFilter from "../reusable/navigation/RecursiveFilter";

export default function Filters({ filters }) {
  return (
    <>
      <div className=" hidden sticky top-32 md:flex flex-col items-start justify-center gap-4 px-6 lg:col-span-1 ">
        <div className="  flex items-center justify-between border border-black border-solid px-1 py-2 ">
          <input
            type="text"
            placeholder="Search"
            className=" text-start border-0 border-transparent outline-none "
          />
          <button className=" border-0 border-transparent  ">
            <CiSearch size="1.5rem" color="#000" />
          </button>
        </div>
        <div>
          {filters &&
            filters.length > 0 &&
            filters.map((filter) => (
              <Accordion
                key={filter.id}
                title={filter.name}
                options={filter.options}
                filter={filter}
              />
            ))}
        </div>
        {/* <div className=" flex flex-col items-start gap-3 justify-center ">
          <span>Enter a price range</span>
          <div className="flex items-center justify-center gap-2 w-full ">
            <div className="flex items-start justify-between gap-1 border px-2 py-3 w-full">
              <span>&#8377;</span>
              <input
                type="number"
                className="border-0 border-transparent outline-none rounded-md text-center px-2 w-20  "
              />
            </div>
            <span>to</span>
            <div className="flex items-start justify-between gap-1 border px-2 py-3 w-full">
              <span>&#8377;</span>
              <input
                type="number"
                className="border-0 border-transparent outline-none rounded-md text-center px-2 w-20 "
              />
            </div>
          </div>
          <button className=" text-white font-semibold border bg-black px-8 py-2 rounded-sm w-[250px]  text-center ">
            REFINE SEARCH
          </button>
        </div> */}
      </div>
      <div className=" block md:hidden">
        <RecursiveFilter filters={filters} />
      </div>
    </>
  );
}
