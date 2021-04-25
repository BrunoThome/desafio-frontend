import React from 'react';
import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

const StyledMovieCardImageWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const StyledMovieCardImage = styled.img`
  display: block;
  max-width: 100%;
  grid-area: 1/1;
  opacity: 0;
  transition: 0.2s;
`;

const StyledMovieCardImageSkeleton = styled.div`
  grid-area: 1/1;
  height: 250px;
  background-image: linear-gradient(90deg, #ddd 0px, #fff 50%, #ddd 100%);
  background-color: #eee;
  background-size: 200%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
`;

const MovieImage = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  function handleError({ target }) {
    setSkeleton(false);
    target.src = `https://via.placeholder.com/250x250.png?text=${alt}`;
  }

  return (
    <StyledMovieCardImageWrapper>
      {skeleton && <StyledMovieCardImageSkeleton />}
      <StyledMovieCardImage
        onLoad={handleLoad}
        onError={handleError}
        alt={alt}
        {...props}
      />
    </StyledMovieCardImageWrapper>
  );
};

export default MovieImage;
