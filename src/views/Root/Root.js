import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'themes/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello Mati</h1>
    <Button>Close / Save</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
