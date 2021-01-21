const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  assetPrefix: !debug ? 'https://github.com/Sodiey/next-color_JS' : '',
};
