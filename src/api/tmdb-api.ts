export const featuredApi = {
  query: "trending/movie/week"
};

export const upcomingApi = {
  query: "movie/upcoming"
};

export const trendingApi = {
  query: "trending/movie/day",
  page: 2
};

export const topRatedApi = {
  query: "movie/top_rated"
};

export const popularApi = {
  query: "movie/popular"
};

export const movideDetails = {
  query: "movie/"
};

export const similarMovieQuery = (id: number) => {
  return {
    query: `movie/${id}/similar`
  };
};
