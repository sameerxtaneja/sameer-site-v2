'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="fixed top-4 right-4 z-50 text-2xl bg-transparent border-none cursor-pointer"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
