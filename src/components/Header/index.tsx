import { useState, useEffect } from 'react';
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';
import styles from './header.module.css';
import { NavLinks } from '../NavLinks';

type AvailableThemes = 'dark' | 'light';

export function Header() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme');

    if (storageTheme === 'dark' || storageTheme === 'light') {
      return storageTheme;
    }

    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  const nextThemeIcon = {
    dark: SunIcon,
    light: MoonIcon,
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href='/' className={styles.logoLink}>
          <TimerIcon />
          <span>Chronos</span>
        </a>
        <nav className={styles.headerNav}>
          <NavLinks
            href='/home'
            icon={HouseIcon}
            title='Go to Home page'
            arialLabel='Go to Home page'
          />
          <NavLinks
            href='/history'
            icon={HistoryIcon}
            title='View History'
            arialLabel='View History'
          />
          <NavLinks
            href='/settings'
            icon={SettingsIcon}
            title='Settings'
            arialLabel='Settings'
          />
          <NavLinks
            href='#'
            icon={nextThemeIcon[theme]}
            title='Change theme'
            arialLabel='Change theme'
            onClick={handleThemeChange}
          />
        </nav>
      </div>
    </header>
  );
}
