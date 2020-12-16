import React from "react";
import { Card } from "@movies-app/components";

const Home = ({ movies }) => {
  return (
    <div className="container grid grid-cols-1 gap-0 md:grid-cols-3 gap-4 ">
      {movies.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();
  return {
    props: {
      movies: data,
    },
  };
}

export default Home;
