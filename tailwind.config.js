/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
         'text': '#deebfd',
         'background': '#1e2124	',
         'primary': '#36393e',
         'secondary': '#373A40',
         'accent': '#606470',
         'success': "#50D890",
            destructive: "#FD8A8A",
            white: "#fdfafa",
        },

        extend: {},
    },
    plugins: [],
};
