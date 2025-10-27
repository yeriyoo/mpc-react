// postcss.config.js
export default {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
    },
  },
};
