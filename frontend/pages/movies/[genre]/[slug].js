import React from "react";
import { NextSeo } from "next-seo";

import { MovieItem } from "@movies-app/components";

const Movie = ({ movie }) => {
  const SEO = {
    title: `Next Movies | ${movie.title}`,
    description: movie.description,
  };
  return (
    <>
      <NextSeo {...SEO} />
      <MovieItem movie={movie} />
    </>
  );
};

export default Movie;

Movie.getInitialProps = async (context) => {
  const { API_URL } = process.env;

  const { slug } = context.query;
  const res = await fetch(`${API_URL}/movies?slug=${slug}`);
  const movie = await res.json();

  return {
    props: {
      movie: movie[0],
    },
  };
};
