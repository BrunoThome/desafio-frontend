import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

const MovieCardStars = ({ stars }) => {
  const totalStars = Array(5)
    .fill(<BsStar />)
    .fill(<BsStarFill />, 0, stars);
  return (
    <>
      {totalStars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </>
  );
};

export default MovieCardStars;
