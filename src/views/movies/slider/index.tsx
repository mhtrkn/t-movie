import { MovieResponse, MovieType } from "@/utils/type";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieSliderCard } from "../slider-card/movie-slider-card";

interface Props {
  data: MovieResponse;
  loading?: boolean;
  title: string;
}

function SliderMovies({ title, data }: Props) {
    
  return (
    <div className="container mb-16">
      <h3 className="text-2xl text-white font-medium mb-4">{title}</h3>
      <Swiper spaceBetween={32} slidesPerView={6}>
        {data?.results?.map((movie: MovieType, index: number) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <MovieSliderCard data={movie} active={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderMovies;
