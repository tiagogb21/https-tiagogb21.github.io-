"use client";

import React from "react";
import { useTheme } from "next-themes";

export const Button = () => {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <button
            onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            className="bg-gray-300 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-300 text-gray-800 dark:text-white px-8 py-2 text-lg rounded-lg"
        >
            Toggle Mode
        </button>
    );
};
