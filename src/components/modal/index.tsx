import { useGetImage } from "@/api/helpers";
import ImdbIcon from "@/assets/icons/imdb";
import InfoIcon from "@/assets/icons/info";
import PlusIcon from "@/assets/icons/plus";
import { ROUTES } from "@/routes";
import { closePosterModal } from "@/store/actions/modal";
import { MovieType, ReduxModalProps } from "@/utils/type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { Button } from "../button";
import SimilarMovies from "@/views/movies/similar";
import CloseIcon from "@/assets/icons/close";

interface PosterModalProps {
  data: MovieType;
}

function PosterModal({ data }: PosterModalProps) {
  const [closing, setClosing] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCloseModal = (e?: any, type?: string) => {
    const container: any = document.getElementById("poster-modal-content");

    if (type && type == "inside") {
      setClosing(true);
      setTimeout(() => {
        dispatch(closePosterModal());
      }, 500);
    }

    if (!container.contains(e?.target)) {
      setClosing(true);
      setTimeout(() => {
        dispatch(closePosterModal());
      }, 500);
    }
  };

  const handleRoute = (id: number) => {
    setClosing(true);
    setTimeout(() => {
      dispatch(closePosterModal());
      router.push(`${ROUTES.MOVIE_DETAIL}${id}`);
    }, 500);
  };

  return (
    <div
      className={
        "fixed flex overflow-hidden items-end justify-center left-0 right-0 top-0 bottom-0 z-30 w-full h-100vh bg-black bg-opacity-90"
      }
      onClick={(e) => handleCloseModal(e)}
    >
      <div
        className={twMerge(
          "relative overflow-y-auto z-40 w-[960px] h-[90vh] bg-dark p-4 rounded-t-2xl text-white no-scrollbar",
          closing ? "animate-drop" : "animate-rise"
        )}
        id="poster-modal-content"
      >
        <div
          className="flex items-center justify-center absolute right-4 top-4 z-10 cursor-pointer p-2 rounded-full border border-primary bg-dark bg-opacity-25"
          onClick={(e) => handleCloseModal(e, "inside")}
        >
          <CloseIcon width={24} height={24} color="#F5C61C" />
        </div>
        <div
          className="absolute left-0 top-0 w-full h-[50%] bg-top bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${useGetImage(data?.backdrop_path)})`
          }}
        >
          <div className="w-full h-full absolute z-[1] bg-modal-gradient"></div>
        </div>
        <div className="relative z-10 h-full">
          <div className="flex flex-col gap-4 w-full p-16 mt-[25%]">
            <h2 className="text-white-500 font-semibold text-4xl">
              {data?.title}
            </h2>
            <div className="flex flex-row items-center justify-start gap-3">
              <div className="flex items-center gap-2">
                <ImdbIcon width={40} height={20} />
                <span className="text-white text-sm font-normal">
                  {data?.vote_average}{" "}
                  <span className="text-gray-500">({data?.vote_count})</span>
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <div className="flex gap-2 items-center">
                <span className="text-gray-300 text-sm font-normal">
                  {data?.release_date}
                </span>
              </div>
            </div>

            <div className="w-full font-normal text-base text-white-100">
              {data?.overview}
            </div>

            <div className="flex items-center gap-4 justify-start mt-4 pb-16 border-b border-gray-800">
              <Button
                size="small"
                apperance="outlined"
                className="whitespace-nowrap"
              >
                <PlusIcon
                  width={20}
                  height={20}
                  color="white"
                  className="me-1"
                />
                Add Favorites
              </Button>

              <Button
                size="small"
                onClick={() => handleRoute(data?.id)}
                apperance="filled"
                className="whitespace-nowrap"
              >
                <InfoIcon
                  width={20}
                  height={20}
                  color="#212121"
                  className="me-1"
                />
                More Info
              </Button>
            </div>
            <SimilarMovies id={data?.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorModal() {
  return <div></div>;
}

function InfoModal() {
  return <div></div>;
}

export default function Modal() {
  const type = useSelector((state: ReduxModalProps) => state?.modal?.type);
  const data = useSelector((state: ReduxModalProps) => state?.modal?.data);

  switch (type) {
    case "poster":
      return <PosterModal data={data} />;
    case "error":
      return <ErrorModal />;
    case "info":
      return <InfoModal />;
    default:
      return;
  }
}
