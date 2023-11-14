/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        websites: "url('/public/websites.jpg')",
        illustration: "url('/public/illustration.png')",
        apps: "url('/public/apps.jpg')",
      },
      backgroundColor: {
        "custom-black": "#111",
      },
      textColor: {
        "txt-gray": "#bbb",
      },
      width: {
        "w-250": "250px",
      },
      height: {
        "h-250": "300px",
        "h-50": "200px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
