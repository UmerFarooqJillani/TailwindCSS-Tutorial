/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {              //that use for override the classes
    // ...
    extend: {
      spacing: {             //customize that append the classes
        // 12: '3rem',
        13: '3.3rem'
        // 14: '3.5rem',
      },
      fontSize: {          //customize
        '10xl': ['10rem', { lineHeight: '1' }]
      }
    },
  },
  plugins: [],
}

