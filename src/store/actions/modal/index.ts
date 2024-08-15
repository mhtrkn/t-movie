import { MovieType } from "@/utils/type";
import { CLOSE_POSTER_MODAL, POSTER_MODAL } from "../../types";

interface PosterModalInterfaces {
  data: MovieType;
  open: boolean;
}

export const showPosterModal = ({ data, open }: PosterModalInterfaces) => ({
  type: POSTER_MODAL,
  payload: {
    data: data,
    open: open,
    type: "poster"
  }
});

export const closePosterModal  = () => ({
  type: CLOSE_POSTER_MODAL,
  payload: {
    open: false
  }
})
