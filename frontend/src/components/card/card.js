import React from "react";
import Link from "next/link";
import Image from "next/image";

import * as Styled from "./card.styles";

export const Card = ({ movie }) => {
  const { API_URL } = process.env;
  return (
    <Styled.Card>
      <Link
        href="/movies/[genre]/[slug]"
        as={`/movies/${movie.genre?.slug}/${movie.slug}`}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Image
            src={`${API_URL}${movie.poster?.url}`}
            alt={movie.title}
            width={movie.poster?.width}
            height={movie.poster?.height}
          />
          <Styled.Body>
            <Styled.Title>{movie.title}</Styled.Title>

            {/* <Styled.Desc>{movie.release_date}</Styled.Desc> */}
            {/* <Styled.Desc dangerouslySetInnerHTML={{ __html: movie.description }} /> */}
          </Styled.Body>
        </a>
      </Link>
    </Styled.Card>
  );
};

export default Card;
