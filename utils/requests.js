const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },

  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?apikey_key=${API_KEY}&language=en-US`,
  },

  fetchAction: {
    title: "Action Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },

  fetchComedy: {
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },

  fetchHorror: {
    title: "Horror Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },

  fetchRomantic: {
    title: "Romantic Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },

  fetchMystry: {
    title: "Mystery Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
};
