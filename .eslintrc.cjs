/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended' // 탄스택 쿼리 린트 플러그인
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: ['./tsconfig.json', './tsconfig.node.json','./tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: "detect" // 리액트 버전 자동 감지
    }
  },
  plugins: ['react-refresh', '@typescript-eslint', 'prettier', 'unused-imports'], // 린트 규칙에 사용할 플러그인들
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // vite 의 HMR 에 맞게 변경된 부분만 리프레쉬 해줌
    "@tanstack/query/exhaustive-deps": "off", // TanStack Query 의 의존성 배열이 완전한지 확인, queryKey 에서 모든 의존성을 누락 없이 선언해야 합니다.
    "@tanstack/query/stable-query-client": "error", // Query Client 가 안정적으로 생성 및 관리되는지 확인, Query Client 는 한번만 초기화되어야 하며 렌더링 마다 재생성 되면 안됨
    "unused-imports/no-unused-imports": "error", // 사용하지 않는 import 문 에러 표시
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_", // "_"로 시작하는 변수는 무시
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ], // 사용하지 않는 import 문 제거

    // 린트 + 프리티어 같이 사용
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 120,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
};
