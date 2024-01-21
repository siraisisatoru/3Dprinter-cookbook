/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        animatedSettings: {
            animatedSpeed: 1000,
            heartBeatSpeed: 500,
            hingeSpeed: 2000,
            bounceInSpeed: 750,
            bounceOutSpeed: 750,
            animationDelaySpeed: 500,
            classes: ["bounce", "heartBeat"],
        },

        extend: {
            colors: { PPT: "#212121", whatsappBBL: "#265B4C",whatsappBBLReceive: "#222D32" },
            fontFamily: {
                SAMple: ["Comfortaa", "sans-serif"],
                libDes: ["Dosis", "sans-serif"],

                "test-font": ["Bricolage Grotesque", " sans-serif"],
                "test-font1": ["Comfortaa", "cursive"],
                "test-font2": ["Dosis", "sans-serif"],
                "test-font3": ["Gluten", "cursive"],
                "test-font4": ["Rajdhani", "sans-serif"],

                "YT-comment": ["Roboto", "sans-serif"],
            },
            animation: {
                "spin-loading-out": "spin 2s linear infinite",
                "spin-loading-mid": "spin 1.75s linear reverse infinite",
                "spin-loading-inner": "spin 1.5s linear infinite",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui"),
        require("tailwindcss-animatecss"),
    ],
    // important: true,

    daisyui: {
        themes: [],
    },
};
