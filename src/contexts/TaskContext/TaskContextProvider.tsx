import { useReducer, useEffect } from 'react';
import { taskReducer } from './taskReducer';
import { TaskContext } from './TaskContext';
import { TaskActionTypes } from './taskActions';
import { initialTaskState } from './initialTaskState';
import { TimerWorkerManager } from '@/workers/TimerWorkerManager';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(e => {
      const countDownSeconds = e.data;

      if (countDownSeconds <= 0) {
        dispatch({ type: TaskActionTypes.COMPLETE_TASK });
        worker.terminate();
      } else {
        dispatch({
          type: TaskActionTypes.COUNT_DOWN,
          payload: { secondsRemaining: countDownSeconds },
        });
      }
    });

    if (state.activeTask) {
      worker.postMessage(state);
    } else {
      worker.terminate();
    }

    return () => {
      console.log('Componente desmontado...');
      worker.terminate();
    };
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
