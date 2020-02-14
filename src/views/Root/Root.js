import React from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import GlobalStyle from 'themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';
import bulbIcon from 'assets/icons/bulb.svg';
import plusIcon from 'assets/icons/plus.svg';
import Card from 'components/Card/Card';
import styled from 'styled-components';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';

const GridWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
        <Input search placeholder="search" />
        <ButtonIcon icon={bulbIcon} />
        <ButtonIcon active icon={plusIcon} />
        <GridWrapper>
          <Card cardType="twitter" />
          <Card cardType="note" />
          <Card cardType="article" />
        </GridWrapper>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
