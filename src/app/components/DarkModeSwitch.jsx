'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) },[]);
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const toggleTheme = () => {
        if (setTheme) {
            if (currentTheme === 'dark') {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        }
    };

    return (
        <div>
            {mounted && (currentTheme === 'dark' ? (
                <MdLightMode
                    onClick={toggleTheme}
                    className="text-xl cursor-pointer hover:text-amber-500"
                    aria-label="Switch to light mode"
                />
            ) : (
                <MdDarkMode
                    onClick={toggleTheme}
                    className="text-xl cursor-pointer hover:text-amber-500"
                    aria-label="Switch to dark mode"
                />
            ))}
        </div>
    );
}
