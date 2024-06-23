/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      //https://maketintsandshades.com/#5b7441,b2cb80
      primary: '#5b7441',
      primaryTint: '#adbaa0',
      primaryShade: '#2e3a21',
      contrast: '#b2cb80',
      contrastTint: '#596640',
      contrastShade: '#596640'
    },
    extend: {},
  },
  plugins: [],
}

