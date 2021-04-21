import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import MovieRegister from './Components/Movies/MovieRegister';
import styled from 'styled-components';

import './App.css';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 30px);
`;

const StyledAppBody = styled.main`
  flex-grow: 1;
`;

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Header />
        <StyledAppBody>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<MovieRegister />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StyledAppBody>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
