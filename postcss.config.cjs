// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        "edge >= 140",
        "chrome >= 54",
        "chromeandroid >= 54",
        "firefox >= 52",
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      flexbox: 'no-2009',
    }),
    require('postcss-discard')({
      // 모든 CSS에서 -webkit-text-size-adjust 제거
      remove: true,
      filter: (decl) => decl.prop === '-webkit-text-size-adjust',
    }),

    // ✅ 모든 CSS에서 text-align: -webkit-match-parent 제거
    require('postcss-discard')({
      remove: true,
      filter: (decl) => decl.prop === 'text-align' && decl.value === '-webkit-match-parent',
    }),

    // color-adjust 제거
    require('postcss-discard')({
      remove: true,
      filter: (decl) => decl.prop === 'color-adjust',
    }),
  ],
};
