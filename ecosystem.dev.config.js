module.exports = {
    apps: [
      {
        name: 'GraphQL Server',
        script: './src/index.js',
        watch: true,
        interpreter: 'babel-node',
        env: {
          PORT: 4000,
          NODE_ENV: 'development',
        },
      },
    ],
  };
  