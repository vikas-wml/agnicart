import LoadMorePagination from "./LoadMorePagination";
import NextAndPrevious from "./NextAndPrevious";
import NumberPagination from "./NumberedPagination";
import OnScrollPagination from "./OnScrollPagination";

export default function GenericPagination(props) {
  switch (props.type) {
    case "LOAD_MORE":
      return <LoadMorePagination {...props} />;
    case "NEXT_AND_PREVIOUS":
      return <NextAndPrevious {...props} />;
    case "ON_SCROLL":
      return <OnScrollPagination {...props} />;
    case "NUMBERED":
      return <NumberPagination {...props} />;
    default:
      return <LoadMorePagination {...props} />;
  }
}
