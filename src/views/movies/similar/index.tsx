import { useGetData } from "@/api/helpers";
import { similarMovieQuery } from "@/api/tmdb-api";
import React from "react";
import SimilarCard from "./similar-card";

const SimilarMovies = ({ id }: { id: number }) => {
  const {
    data: similar,
    isLoading: similarLoading,
    isSuccess: similarSucces
  } = useGetData(similarMovieQuery(id));

  return (
    <>
      {!similarLoading && similarSucces && (
        <div className="flex flex-col gap-5">
          <h3 className="mt-8 text-2xl">Similar Movies</h3>
          <div className="grid grid-cols-3 gap-5">
            {similar?.results?.splice(0, 9)?.map((item) => (
              <SimilarCard data={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SimilarMovies;
