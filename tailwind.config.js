/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            text: "#e8e9f2",
            background: "#0f0f14",
            primary: "#c1c5ff",
            secondary: "#bfcfe7",
            accent: "#ff7e8a",
            destructive: "#ff3f3f",
            white: "#fdfafa",
        },
        extend: {},
    },
    plugins: [],
};
