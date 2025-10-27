module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      flexbox: 'no-2009',
      remove: false, // 기존 -webkit- 속성 유지
    },
    // postcss-replace 플러그인으로 -webkit-text-size-adjust를 text-size-adjust로 변환
    'postcss-replace': {
      pattern: /-webkit-text-size-adjust/g,
      data: { replace: 'text-size-adjust' },
    },
  },
};
