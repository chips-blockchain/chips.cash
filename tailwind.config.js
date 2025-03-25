module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#9333ea',
        'neon-blue': '#06b6d4',
        'dark-purple': '#3b0764',
        'dark-bg': '#0a0014',
      },
      boxShadow: {
        'neon': '0 0 5px #9333ea, 0 0 10px #9333ea',
        'inner-neon': 'inset 0 0 5px #9333ea, inset 0 0 10px #9333ea',
        'neumorphic': '5px 5px 10px rgba(0, 0, 0, 0.5), -5px -5px 10px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}