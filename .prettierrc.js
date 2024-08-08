module.exports = {
  printWidth: 80,
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  useTabs: false,
  arrowParens: 'always',
  endOfLine: 'auto',
  jsxSingleQuote: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^((actions)|(app)|(components)|(context)|(config)|(theme)|(types)|(utils))(.*)$',
    '^((./)|(../))(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
