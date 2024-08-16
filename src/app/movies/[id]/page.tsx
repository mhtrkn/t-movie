"use client";

import { useGetImage, useGetMovieDetails } from "@/api/helpers";
import ImdbIcon from "@/assets/icons/imdb";
import PlayIcon from "@/assets/icons/play";
import PlusIcon from "@/assets/icons/plus";
import { Button } from "@/components/button";
import { ROUTES } from "@/routes";
import { setLoaderModal } from "@/store/actions/loader";
import { closePosterModal } from "@/store/actions/modal";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  params: {
    id: number;
  };
}

function MovieDetailPage({ params }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    data: movieData,
    isLoading: movieLoading,
    isSuccess: movieSuccess
  } = useGetMovieDetails({
    movieId: params?.id
  });

  useEffect(() => {
    if (movieData && movieSuccess) {
      dispatch(setLoaderModal(false));
    }
  }, [movieSuccess, movieData]);

  const handleRoute = () => {
    setTimeout(() => {
      dispatch(closePosterModal());
      router.push(`${ROUTES.PLAYING}${params?.id}`);
    }, 500);
  };

  return (
    <div className="w-full min-h-[90vh] relative pt-[7.1875rem]">
      <div
        className="w-full h-full overflow-hidden bg-no-repeat flex items-center justify-end absolute top-0 mx-auto left-0 right-0 z-0"
        style={{
          backgroundImage: `url(${useGetImage(movieData?.backdrop_path)})`,
          backgroundSize: "cover"
        }}
      >
        <div className="w-full h-full absolute z-[1] bg-custom-top-gradient"></div>
        <div className="w-full h-full absolute z-[1] bg-custom-left-gradient"></div>
      </div>

      {!movieLoading && (
        <div className="container px-7 relative w-full flex flex-col gap-4">
          <div className="pt-[8.5rem] max-w-[29.375rem] mx-0">
            <h2 className="text-white-500 font-semibold text-[4rem]">
              {movieData?.title}
            </h2>
          </div>

          <div className="flex flex-row items-center justify-start gap-3">
            <div className="flex items-center gap-2">
              <ImdbIcon width={40} height={20} />
              <span className="text-white text-sm font-normal">
                {movieData?.vote_average}{" "}
                <span className="text-gray-500">({movieData?.vote_count})</span>
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="flex gap-2 items-center">
              <span className="text-gray-300 text-sm font-normal">
                {movieData?.release_date}
              </span>
            </div>
          </div>

          <div className="w-full font-normal text-base max-w-[29.375rem] text-white-100">
            {movieData?.overview}
          </div>

          <div className="flex items-center gap-4 justify-start mt-4">
            <Button apperance="outlined" className="whitespace-nowrap">
              <PlusIcon width={20} height={20} color="white" className="me-1" />
              Add Favorites
            </Button>

            <Button apperance="filled" onClick={handleRoute}>
              <PlayIcon width={20} height={20} color="#2E2E2E" />
              Watch now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetailPage;
