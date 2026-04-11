import { Bed, Coffee, Flame } from 'lucide-react';
import styles from './cycles.module.css';

export function Cycles() {
  return (
    <>
      <span className={styles.cyclesLabel}>Cycles</span>
      <div className={styles.cyclesDots}>
        <span className={`${styles.cyclesDot} ${styles.workTime}`}>
          <Flame size={22} color='#FFF' />
        </span>

        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}>
          <Coffee size={22} color='#FFF' />
        </span>

        <span className={`${styles.cyclesDot} ${styles.workTime}`}>
          <Flame size={22} color='#FFF' />
        </span>

        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}>
          <Coffee size={22} color='#FFF' />
        </span>

        <span className={`${styles.cyclesDot} ${styles.workTime}`}>
          <Flame size={22} color='#FFF' />
        </span>

        <span className={`${styles.cyclesDot} ${styles.shortBreakTime}`}>
          <Coffee size={22} color='#FFF' />
        </span>

        <span className={`${styles.cyclesDot} ${styles.workTime}`}>
          <Flame size={22} color='#FFF' />
        </span>

        <span className={`${styles.cyclesDot} ${styles.longBreakTime}`}>
          <Bed size={22} color='#FFF' />
        </span>
      </div>
    </>
  );
}
