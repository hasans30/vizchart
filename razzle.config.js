module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: false,
        tsLoader: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
        forkTsChecker: {
          eslint: {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
          }
        },
      },
    },
  ],
};