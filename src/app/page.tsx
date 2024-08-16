"use client";

import { useGetData } from "@/api/helpers";
import {
  featuredApi,
  popularApi,
  topRatedApi,
  trendingApi,
  upcomingApi
} from "@/api/tmdb-api";
import FeaturedMovie from "@/views/movies/featured";
import SliderMovies from "@/views/movies/slider";

export default function Home({}) {
  const {
    data: featured,
    isLoading: featuredLoading,
    isSuccess: featuredSuccess
  } = useGetData(featuredApi);

  const {
    data: upcoming,
    isLoading: upcomingLoading,
    isSuccess: upcomingSuccess
  } = useGetData(upcomingApi);

  const {
    data: trending,
    isLoading: trendingLoading,
    isSuccess: trendingSuccess
  } = useGetData(trendingApi);

  const {
    data: topRated,
    isLoading: topRatedLoading,
    isSuccess: topRatedSuccess
  } = useGetData(topRatedApi);

  const {
    data: popular,
    isLoading: popularLoading,
    isSuccess: popularSuccess
  } = useGetData(popularApi);
  return (
    <>
      <FeaturedMovie data={featured} loading={featuredSuccess} />
      <SliderMovies
        title={"Upcoming Movies"}
        data={upcoming}
        loading={upcomingSuccess}
      />
      <SliderMovies
        title={"Trending Movies"}
        data={trending}
        loading={trendingSuccess}
      />
      <SliderMovies
        title={"Top Rated Movies"}
        data={topRated}
        loading={topRatedSuccess}
      />
      <SliderMovies
        title={"Popular Movies"}
        data={popular}
        loading={popularSuccess}
      />
    </>
  );
}
