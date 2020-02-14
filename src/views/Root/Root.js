import React from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import GlobalStyle from 'themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';
import bulbIcon from 'assets/icons/bulb.svg';
import plusIcon from 'assets/icons/plus.svg';

import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello Mati</h1>
    <ThemeProvider theme={theme}>
      <>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
        <Input search placeholder="search" />
        <ButtonIcon icon={bulbIcon} />
        <ButtonIcon active icon={plusIcon} />
      </>
    </ThemeProvider>
  </div>
);

export default Root;
