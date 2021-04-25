import React from 'react';
import styled, { keyframes } from 'styled-components';

const ldsHourglass = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

const StyledLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  justify-self: center;
  align-self: center;

  &::after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 4px;
    box-sizing: border-box;
    border: 16px solid #fb1;
    border-color: #fb1 transparent #fb1 transparent;
    animation: ${ldsHourglass} 1.2s infinite;
  }
`;

const Loading = () => {
  return <StyledLoading></StyledLoading>;
};

export default Loading;
