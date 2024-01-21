import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const date = new Date();
    let currentDay = String(date.getDate());
    let currentMonth = String(date.getMonth() + 1);
    let currentYear = date.getFullYear();
    // we will display the date as DD-MM-YYYY
    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
    return {
        plugins: [react({ include: "**/*.jsx" }), macrosPlugin()],
        build: {
            chunkSizeWarningLimit: 50000,
        },
        define: {
            BUILD_TIMESTAMP: JSON.stringify(currentDate),
         
        },
    };
});
