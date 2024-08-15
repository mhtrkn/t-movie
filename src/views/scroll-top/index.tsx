import { useGetWindowScroll } from "@/utils/helpers";
import { twMerge } from "tailwind-merge";
import TopToScrollIcon from "./../../assets/icons/top-to-back";

const TopToScroll = () => {
  const scrollSize = useGetWindowScroll();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={twMerge(
        "flex items-center pb-0.5 justify-center z-20 transition-all duration-200 cursor-pointer",
        "fixed bottom-6 right-6 w-10 h-10 rounded-full border-2 border-primary",
        "hover:scale-110",
        scrollSize > 100 ? "fixed" : "hidden"
      )}
      onClick={handleScrollToTop}
    >
      <TopToScrollIcon width={18} height={18} fill={"#F5C61C"} />
    </div>
  );
};

export default TopToScroll;
