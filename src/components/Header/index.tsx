import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';

import styles from './header.module.css';

import { NavLinks } from '../NavLinks';

export function Header() {
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
            href='/changetheme'
            icon={SunIcon}
            title='Change theme'
            arialLabel='Change theme'
          />
        </nav>
      </div>
    </header>
  );
}
