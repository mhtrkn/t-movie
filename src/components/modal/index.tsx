import { useGetImage } from "@/api/helpers";
import ImdbIcon from "@/assets/icons/imdb";
import { ROUTES } from "@/routes";
import { closePosterModal } from "@/store/actions/modal";
import { MovieType, ReduxModalProps } from "@/utils/type";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { Button } from "../button";
import PlayIcon from "@/assets/icons/play";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PlusIcon from "@/assets/icons/plus";
import InfoIcon from "@/assets/icons/info";

interface PosterModalProps {
  data: MovieType;
}

function PosterModal({ data }: PosterModalProps) {
  const [closing, setClosing] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCloseModal = (e) => {
    const container = document.getElementById("poster-modal-content");

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
        "fixed flex overflow-hidden items-center justify-center left-0 right-0 top-0 bottom-0 z-30 w-full h-100vh bg-black bg-opacity-80"
      }
      onClick={(e) => handleCloseModal(e)}
    >
      <div
        className={twMerge(
          "relative z-40 w-[960px] bg-dark p-4 border rounded-lg text-white",
          closing ? "animate-deep-in" : "animate-deep-out"
        )}
        id="poster-modal-content"
      >
        <div
          className="absolute left-0 top-0 w-full h-full bg-red blur-sm opacity-20"
          style={{
            backgroundImage: `url(${useGetImage(data?.backdrop_path)})`
          }}
        >
          <div className="w-full h-full absolute z-[1] bg-dark-left-gradient"></div>
        </div>
        <div className="relative z-10 flex justify-between h-full">
          <div className="flex flex-col gap-4 w-1/2 p-16">
            <h2 className="text-white-500 font-semibold text-2xl">
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

            <div className="w-full font-normal text-base max-w-[29.375rem] text-white-100">
              {data?.overview}
            </div>

            <div className="flex items-center gap-4 justify-start mt-4">
              <Button apperance="outlined" className="whitespace-nowrap">
                <PlusIcon width={20} height={20} color="white" className="me-1" />
                Add Favorites
              </Button>

              <Button
                onClick={() => handleRoute(data?.id)}
                apperance="filled"
                className="whitespace-nowrap"
              >
                <InfoIcon width={20} height={20} color="#212121" className="me-1" />
                More Info
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/2 h-full p-16">
            <img
              className="w-full h-full contain rounded-lg"
              src={useGetImage(data?.poster_path)}
              alt="poster_movie_image"
            />
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
