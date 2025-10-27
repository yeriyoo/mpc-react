// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['>0.2%', 'not dead', 'not op_mini all'],
      flexbox: 'no-2009', 
      grid: 'autoplace', 
    }),
  ],
};
