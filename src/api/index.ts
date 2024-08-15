import { FetchDataProps } from "@/utils/type";
import { useState, useEffect } from "react";

export const useGetData = ({
  query = "",
  language = "en-US",
  page = 1,
}: FetchDataProps) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process?.env?.NEXT_PUBLIC_API_TOKEN}`,
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${query}?language=${language}&page=${page}`,
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
  }, [query, language, page]);

  return { data, isLoading, isSuccess };
};

export const useGetImage = (url: undefined | string) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/";

  const imageURL = `${baseImageUrl}w780${url}`;
  
  return imageURL;
};
