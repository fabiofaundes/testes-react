import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Nav from './Nav'

const GlobalStyles = createGlobalStyle `
  @import url('https://fonts.googleapis.com/css?family=Arvo&display=swap');

  .font-arvo {
    font-family: 'Arvo', serif;  
  }
`

const PageBody = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100vw;
  height: 100vh;
`

class App extends React.Component {
  render() {
    return(
      <PageBody>
        <Nav></Nav>
      </PageBody>
    )
  }
}

export default App;
