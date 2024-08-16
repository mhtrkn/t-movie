import { useGetImage } from "@/api/helpers";
import ImdbIcon from "@/assets/icons/imdb";
import PlayIcon from "@/assets/icons/play";
import PlusIcon from "@/assets/icons/plus";
import { Button } from "@/components/button";
import { ROUTES } from "@/routes";
import { setLoaderModal } from "@/store/actions/loader";
import { MovieResponse } from "@/utils/type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  data: MovieResponse;
  loading: boolean;
}

function FeaturedMovie({ data, loading }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    loading && setTimeout(() => {
      dispatch(setLoaderModal(false))
    }, 500);
  }, [loading]);

  const handleRoute = () => {
    router.push(`${ROUTES.PLAYING}${data?.results[0]?.id}`)
  }

  return (
    <div className="w-full min-h-[90vh] relative pt-[7.1875rem]">
      <div
        className="w-full h-full overflow-hidden bg-no-repeat flex items-center justify-end absolute top-0 mx-auto left-0 right-0 z-0"
        style={{
          backgroundImage: `url(${useGetImage(
            data?.results[0]?.backdrop_path
          )})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full absolute z-[1] bg-custom-top-gradient"></div>
        <div className="w-full h-full absolute z-[1] bg-custom-left-gradient"></div>
      </div>

      {loading && (
        <div className="container px-7 relative w-full flex flex-col gap-4">
          <div className="pt-[8.5rem] max-w-[29.375rem] mx-0">
            <h2 className="text-white-500 font-semibold text-[4rem]">
              {data?.results[0]?.title}
            </h2>
          </div>

          <div className="flex flex-row items-center justify-start gap-3">
            <div className="flex items-center gap-2">
              <ImdbIcon width={40} height={20} />
              <span className="text-white text-sm font-normal">
                {data?.results[0]?.vote_average}{" "}
                <span className="text-gray-500">
                  ({data?.results[0]?.vote_count})
                </span>
              </span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="flex gap-2 items-center">
              <span className="text-gray-300 text-sm font-normal">
                {data?.results[0]?.release_date}
              </span>
            </div>
          </div>

          <div className="w-full font-normal line-clamp-3 text-base max-w-[29.375rem] overflow-hidden text-ellipsis text-white-100">
            {data?.results[0]?.overview}
          </div>
          <Link
            className="text-primary -mt-4"
            href={`${ROUTES.MOVIE_DETAIL}${data?.results[0]?.id}`}
          >
            See More
          </Link>

          <div className="flex items-center gap-4 justify-start mt-4">
            <Button apperance="outlined">
              <PlusIcon width={20} height={20} color="white" className="me-1" />
              Add Favorites
            </Button>

            <Button onClick={() => handleRoute()} apperance="filled">
              <PlayIcon width={20} height={20} color="#2E2E2E" className="me-1" />
              Watch now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedMovie;
