import React, { Fragment } from 'react';
import Seo from './seo';
import Container from './container';
import GlobalStyle from './global-styles';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const Layout = ({ children, title, description, socialImage = '' }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Seo
          title={title}
          description={description}
          socialImage={socialImage}
        />
        <LayoutWrapper>
          <Container>{children}</Container>
        </LayoutWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default Layout;

const LayoutWrapper = styled.main`
  padding-top: calc(var(--size-900) * 2);
  padding-bottom: calc(var(--size-900) * 2);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
