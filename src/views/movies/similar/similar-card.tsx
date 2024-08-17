import { useGetSmallImage } from "@/api/helpers";
import HeartLikeIcon from "@/assets/icons/like-heart";
import PlayIcon from "@/assets/icons/play";
import PlusIcon from "@/assets/icons/plus";
import { Button } from "@/components/button";
import { MovieType } from "@/utils/type";
import React from "react";

const SimilarCard = ({ data }: { data: MovieType }) => {
  return (
    <div key={data?.id} className="w-full h-[350px] bg-dark border border-gray-900 overflow-hidden text-white rounded-lg">
      <div
        className="w-full h-[150px] bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${useGetSmallImage(data?.backdrop_path)})`
        }}
      ></div>
      <div className="flex flex-col justify-between w-full h-[200px] pb-4 bg-dark-100 bg-opacity-40">
        <div>
          <h3 className="p-2 text-white-500 text-sm font-normal">
            {data?.title}
          </h3>
          <p className="px-2 text-gray-500 line-clamp-5 text-xs font-normal overflow-hidden text-ellipsis">
            {data?.overview}
          </p>
        </div>
        <div className="flex items-center justify-start gap-4 px-2">
          <Button size="mini" apperance="outlined">
            <PlusIcon width={20} height={20} color="white" />
          </Button>
          <Button size="mini" apperance="outlined">
            <HeartLikeIcon width={20} height={20} color="white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimilarCard;
