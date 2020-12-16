import React from "react";
import * as Styled from "./card.styles";

export const Card = ({ movie }) => {
  const { API_URL } = process.env;
  return (
    <Styled.Card>
      <Styled.Poster src={`${API_URL}${movie.poster.url}`} />
      <Styled.Body>
        <Styled.Title>{movie.title}</Styled.Title>
        <Styled.Desc dangerouslySetInnerHTML={{ __html: movie.description }} />
      </Styled.Body>
    </Styled.Card>
  );
};

export default Card;
