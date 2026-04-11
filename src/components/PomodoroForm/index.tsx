import styles from './pomodoroForm.module.css';

import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';

export function PomodoroForm() {
  return (
    <form action='' className={styles.formContainer}>
      <div className={styles.formRow}>
        <DefaultInput
          id='task'
          labelText='Task'
          type='text'
          placeholder='Enter the Task'
        />
      </div>
      <div className={styles.formRow}>
        <p>
          Nesse ciclo <span>foque</span> por <span>25 min</span>
        </p>
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
      <div className={styles.formRow}>
        <button>
          <PlayCircleIcon />
        </button>
      </div>
    </form>
  );
}
