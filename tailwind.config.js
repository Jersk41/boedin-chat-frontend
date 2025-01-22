/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
         'text': '#deebfd',
         'background': '#1e2124	',
         'primary': '#36393e',
         'secondary': '#D9EAFD',
         'accent': '#606470',
         'success': "#50D890",
            destructive: "#ff3f3f",
            white: "#fdfafa",
        },

        extend: {},
    },
    plugins: [],
};
