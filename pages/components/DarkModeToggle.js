// components/DarkModeToggle.js
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div
      className={`dark-mode-button ${isDarkMode ? 'dark' : ''}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ?  <Image src="/sun.png" width={36} height={36} />
  : <Image src="/moon.png" width={36} height={36} />
  
}
    </div>
  );
}