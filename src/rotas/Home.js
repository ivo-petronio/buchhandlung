import React from 'react'
import Pesquisa from '../components/pesquisa'
import Lancamentos from '../components/lancamentos'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52, #326589);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <Lancamentos />
    </AppContainer>
  );
}

export default Home;