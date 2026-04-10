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
          <NavLinks href='/home' icon={HouseIcon} />
          <NavLinks href='/history' icon={HistoryIcon} />
          <NavLinks href='/settings' icon={SettingsIcon} />
          <NavLinks href='/changetheme' icon={SunIcon} />
        </nav>
      </div>
    </header>
  );
}
