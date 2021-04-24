import React, { Fragment } from 'react';
import Seo from './seo';
import Container from './container';
import GlobalStyle from './global-styles';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { motion } from 'framer-motion';

const Layout = ({ children, title, description }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Seo title={title} description={description} />
        <LayoutWrapper
          layout
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Container>{children}</Container>
        </LayoutWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default Layout;

const LayoutWrapper = styled(motion.main)`
  padding-top: calc(var(--size-900) * 2);
  padding-bottom: calc(var(--size-900) * 2);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
