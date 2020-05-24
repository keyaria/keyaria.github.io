// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    fontFamily: {
      'display': ['Lato']
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")]
};
