module.exports = {
  '*.{js,jsx,ts,tsx,json}': 'pretty-quick --staged',
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'npm run test -- --watchAll=false --findRelatedTests'],
};
