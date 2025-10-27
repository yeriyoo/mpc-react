// postcss.config.cjs
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      flexbox: 'no-2009',
    },
    // 필요하면 cssnano 추가 가능 (빌드시 압축)
    // 'cssnano': { preset: 'default' }
  },
};
