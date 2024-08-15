import { useGetImage } from "@/api/helpers";
import { showPosterModal } from "@/store/actions/modal";
import { MovieType } from "@/utils/type";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";

interface Props {
  data: MovieType;
  active?: boolean;
}

export const MovieSliderCard = ({ active, data }: Props) => {
  const dispatch = useDispatch();

  const handleShowPosterModal = (movie: MovieType) => {
    dispatch(
      showPosterModal({
        open: true,
        data: movie,
      })
    );
  };

  return (
    <div
      key={data?.id}
      className={twMerge(
        "rounded-lg overflow-hidden max-w-[13rem] max-h-[17.5rem] h-full w-full cursor-pointer",
        "opacity-50 flex items-center justify-center transition-all duration-300",
        "hover:opacity-100"
      )}
      onClick={() => handleShowPosterModal(data)}
    >
      <Image
        src={useGetImage(data?.poster_path)}
        alt={`${data?.original_title}`}
        width={208}
        height={280}
      />
    </div>
  );
};
