import React from 'react';
import GlobalStyle from 'themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'themes/mainTheme';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
