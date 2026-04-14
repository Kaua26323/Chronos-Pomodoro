import { useTaskContext } from '@/contexts/TaskContext/useTaskContext';
import styles from './countDown.module.css';
export function CountDown() {
  const { state } = useTaskContext();
  return <div className={styles.timer}>{state.formattedSecondsRemaining}</div>;
}
