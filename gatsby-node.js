// Set webpack config
// Original gatsby-node in theme
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: { react: require.resolve('react') },
    },
  });
};
