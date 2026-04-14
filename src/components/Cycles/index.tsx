import { Bed, Coffee, Flame } from 'lucide-react';
import styles from './cycles.module.css';
import { getNextCycle } from '@/utils/getNextCycle';
import { getNextCycleType } from '@/utils/getNextCycleType';
import { useTaskContext } from '@/contexts/TaskContext/useTaskContext';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleSteps = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: { title: 'focus', icon: Flame },
    shortBreakTime: { title: 'Short break', icon: Coffee },
    longBreakTime: { title: 'Long break', icon: Bed },
  };

  return (
    <>
      <span className={styles.cyclesLabel}>Cycles</span>
      <div className={styles.cyclesDots}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          const Icon = cycleDescriptionMap[nextCycleType].icon;
          return (
            <span
              key={index}
              className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
              aria-label={`${cycleDescriptionMap[nextCycleType].title} cycle indicator`}
              title={`${cycleDescriptionMap[nextCycleType].title} cycle indicator`}
            >
              <Icon size={22} color='#FFF' />
            </span>
          );
        })}
      </div>
    </>
  );
}
