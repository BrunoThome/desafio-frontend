import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import MovieRegister from './Components/Movies/MovieRegister';
import styled from 'styled-components';

import './App.css';
import Footer from './Components/Footer';
import Loading from './Components/Helper/Loading';

const Home = React.lazy(() => import('./Components/Home'));

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
      <React.Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Header />
          <StyledAppBody>
            <Routes>
              <Route path="/" end element={<Home />} />
              <Route path="register" element={<MovieRegister />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </StyledAppBody>
          <Footer />
        </BrowserRouter>
      </React.Suspense>
    </StyledApp>
  );
}

export default App;
