import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import * as S from './App.style';

function App() {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
}

export default App;
