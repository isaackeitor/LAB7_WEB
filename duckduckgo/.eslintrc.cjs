module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended', 
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "semi": [
      "error",
      "never"
    ],
    "prettier/prettier": [
      "warn", 
      {"semi":false, "tabWidth": 4,'endOfLine': 'auto'}
    ],
    "max-len" : [
      "warn",
      {"code":120}
    ]
  },
};
