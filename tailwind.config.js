// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./node_modules/flowbite-react/**/*.js",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{ts,tsx}",
//     "./public/**/*.html",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("flowbite/plugin")],
// };
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
};