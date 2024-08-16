export interface FetchDataProps {
  query: string;
  language?: string;
  page?: number;
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "mini" | "small" | "default" | "large";
  apperance: "outlined" | "filled";
  className?: string;
  children?: React.ReactNode;
}
export interface ReduxLoaderProps {
  loader: {
    open: true | false;
  };
}
export interface ReduxModalProps {
  modal: {
    open: true | false;
    data: MovieType;
    type?: "poster" | "error" | "info";
  };
}
export interface UpcomingMoviesProps {
  data: any;
}
export interface MovieType {
  adult?: boolean;
  backdrop_path?: string;
  id: number;
  title?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  media_type?: "movie";
  original_language?: string;
  genre_ids?: number[];
  popularity?: number;
  release_date?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
export interface MovieResponse {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}
