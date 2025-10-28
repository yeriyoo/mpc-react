const createSafeRemoveDeclPlugin = (prop, value) => {
  const plugin = {
    postcssPlugin: `remove-${prop}`,
    Once(root) {
      root.walkDecls((decl) => {
        if (decl.prop === prop && (value === undefined || decl.value === value)) {
          decl.remove();
        }
      });
    },
  };
  plugin.postcss = true;
  return plugin;
};

// color-adjust 계열 전체 제거
const colorAdjustProps = [
  'color-adjust',
  '-webkit-color-adjust',
  '-moz-color-adjust',
  '-ms-color-adjust'
];

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

    createSafeRemoveDeclPlugin('-webkit-text-size-adjust'),
    createSafeRemoveDeclPlugin('text-align', '-webkit-match-parent'),
    // createSafeRemoveDeclPlugin('color-adjust'),
  ],
};
