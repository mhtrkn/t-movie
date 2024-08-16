import { FetchDataProps, MovieResponse, MovieType } from "@/utils/type";
import { useEffect, useState } from "react";
import { api_token, base_image_url, base_url } from "./api-config";
import { movideDetails } from "./tmdb-api";

export const useGetData = ({
  query = "",
  language = "en-US",
  page = 1
}: FetchDataProps) => {
  const [data, setData] = useState<MovieResponse>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(
    () => {
      const fetchData = async () => {
        setIsLoading(true);
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${api_token}`
          }
        };

        try {
          const response = await fetch(
            `${base_url}${query}?language=${language}&page=${page}`,
            options
          );
          const result = await response.json();
          setData(result);
          setIsSuccess(true);
        } catch (err) {
          console.error(err);
          setIsSuccess(false);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    },
    [query, language, page]
  );

  return { data, isLoading, isSuccess };
};

export const useGetImage = (url: string | undefined) => {
  const imageURL = `${base_image_url}w780${url}`;

  return imageURL;
};

export const useGetSmallImage = (url: string | undefined) => {
  const imageURL = `${base_image_url}w500${url}`;

  return imageURL;
};

interface MovieDetailsProps {
  movieId: Number;
}

export const useGetMovieDetails = ({ movieId }: MovieDetailsProps) => {
  const [data, setData] = useState<MovieType>();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(
    () => {
      const fetchData = async () => {
        setIsLoading(true);
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${api_token}`
          }
        };

        try {
          const response = await fetch(
            `${base_url}${movideDetails?.query}${movieId}`,
            options
          );
          const result = await response.json();
          setData(result);
          setIsSuccess(true);
        } catch (err) {
          console.error(err);
          setIsSuccess(false);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    },
    [movieId]
  );

  return { data, isLoading, isSuccess };
};