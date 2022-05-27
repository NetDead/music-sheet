module.exports = {
  extends: 'airbnb',
  env: {
    es2020: true,
    browser: true,
  },
  plugins: [
    'react',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: './config/webpack/config.dev.js',
      },
      react: {
        createClass: 'createReactClass',
        pragma: 'React',
        version: 'detect',
      },
    },
  },
  rules: {
    // Запрещает использовать методы объекта console.
    'no-console': 'error',

    // Требует все экспортируемые данные объявлять в самом низу файла, после других операторов и выражений
    'import/exports-last': 'error',

    // Запрещает экспорт по умолчанию, вместо этого необходимо использовать именованный экспорт
    'import/no-default-export': 'error',

    // Разрешает именованный экспорт вместо экспорта по умолчанию
    'import/prefer-default-export': 'off',

    // Запрещает использовать круглые скобки в аргументе стрелочной функции, если без них можно обойтись.
    'arrow-parens': ['error', 'as-needed'],

    // Ограничивает длину строки кода 120 символами. Игнорирует строки, шаблоны и комментарии.
    'max-len': [
      'error',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
  },
};
