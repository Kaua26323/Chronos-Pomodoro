import { useRef } from 'react';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import styles from './pomodoroForm.module.css';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { getNextCycle } from '@/utils/getNextCycle';
import { useTaskContext } from '@/contexts/TaskContext/useTaskContext';
import type { TaskModel } from '@/models/TaskModel';
import { getNextCycleType } from '@/utils/getNextCycleType';
import { formatSecondsToMin } from '@/utils/formatSecondsToMin';

export function PomodoroForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleStartPomodoro(e: React.SubmitEvent) {
    e.preventDefault();
    if (taskNameInput === null) return;

    const taskName = taskNameInput.current.value.trim();
    if (!taskName) return alert('Invalid Value');

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMin(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  console.log(state);

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
      };
    });
  }

  return (
    <form onSubmit={handleStartPomodoro} className={styles.formContainer}>
      <div className={styles.formRow}>
        <DefaultInput
          id='task'
          labelText='Task'
          type='text'
          placeholder='Enter the Task'
          ref={taskNameInput}
        />
      </div>
      <div className={styles.formRow}>
        <p>
          Nesse ciclo <span>foque</span> por <span>25 min</span>
        </p>
      </div>

      {state.currentCycle > 0 && (
        <div className={styles.formRow}>
          <Cycles />
        </div>
      )}

      <div className={styles.formRow}>
        {!state.activeTask ? (
          <DefaultButton
            key='submit_button'
            type='submit'
            icon={PlayCircleIcon}
            arialLabel='Start new task'
            title='Start new task'
          />
        ) : (
          <DefaultButton
            key='stop_button'
            color='red'
            type='button'
            icon={StopCircleIcon}
            arialLabel='Pause current task'
            title='Pause current task'
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
