import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Button from './components/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large" color="pink">
            BUTTON
          </Button>
          <Button>BUTTON</Button>
          <Button size="small" color="gray">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color="pink" outline>
            BUTTON
          </Button>
          <Button outline>BUTTON</Button>
          <Button size="small" color="gray" outline>
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color="pink" fullwidth>
            BUTTON
          </Button>
          <Button outline fullwidth>
            BUTTON
          </Button>
          <Button size="small" color="gray" fullwidth>
            BUTTON
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
