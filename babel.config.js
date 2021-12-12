module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx'],
        alias: {
          '@src': './src',
        },
      },
    ],
    'jest-hoist',
  ],
}
