module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
  ],
  rules: {
    "semi": ["error", "never"],
    "indent": ["error", 2]    
  }
}