import React from "react";
import { ActorItem } from "@movies-app/components";

const ActorDetailsPage = ({ actor }) => {
  return (
    <div className="container mx-auto mt-8">
      <ActorItem
        name={`${actor.first_name} ${actor.last_name}`}
        bio={actor.bio}
        img={actor.image.url}
        movies={actor.movies}
      />
    </div>
  );
};

export default ActorDetailsPage;

export async function getServerSideProps(context) {
  const { API_URL } = process.env;

  const { id } = context.query;
  const res = await fetch(`${API_URL}/actors/${id}`);
  const actor = await res.json();

  return {
    props: {
      actor,
    },
  };
}
