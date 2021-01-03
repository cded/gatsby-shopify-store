import React from 'react';
import { ThemeProvider, Styled } from 'theme-ui';
import Helmet from 'react-helmet';
import { Flex, Box } from 'rebass';
import ReactGA from 'react-ga';
import { useStaticQuery, graphql } from 'gatsby';

import { MenuContextProvider } from './Menu/context';

import { SearchContextProvider } from './Search/context';
import Navbar from './Navbar';
import Footer from './Footer';
import theme from '../gatsby-plugin-theme-ui/index';

import './reset.css';

const initializeReactGA = (googleAnalyticsId) => {
  ReactGA.initialize(googleAnalyticsId);
  if (typeof window !== `undefined`) {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
};

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query LayoutStaticQuery {
        site {
          siteMetadata {
            gatsbyStorefrontConfig {
              googleAnalyticsId
            }
          }
        }
      }
    `
  );

  const { googleAnalyticsId } = data.site.siteMetadata.gatsbyStorefrontConfig;

  initializeReactGA(googleAnalyticsId);

  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <LayoutComponents children={children} />
      </Styled.root>
    </ThemeProvider>
  );
};

const LayoutComponents = ({ children }) => {
  return (
    <Box
      bg="backgroundMain"
      sx={{
        width: '100%',
      }}
    >
      <Helmet>
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <script type="text/javascript">
          {`(function () {
  window.__insp = window.__insp || [];
  __insp.push(['wid', 229295937]);
  var ldinsp = function () {
    if (typeof window.__inspld != 'undefined') return;
    window.__inspld = 1;
    var insp = document.createElement('script');
    insp.type = 'text/javascript';
    insp.async = true;
    insp.id = 'inspsync';
    insp.src =
      ('https:' == document.location.protocol ? 'https' : 'http') +
      '://cdn.inspectlet.com/inspectlet.js?wid=229295937&r=' +
      Math.floor(new Date().getTime() / 3600000);
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(insp, x);
  };
  setTimeout(ldinsp, 0);
})();`}
        </script>
      </Helmet>

      <Flex flexDirection="column" style={{ minHeight: '100vh' }}>
        <MenuContextProvider>
          <SearchContextProvider>
            <Navbar />
          </SearchContextProvider>
        </MenuContextProvider>

        <Box
          as="main"
          flex="1"
          width={1}
          style={{ height: '100%', minHeight: '74vh' }}
          mx="auto"
          mt={['35px', '95px']}
        >
          {children}
        </Box>

        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
