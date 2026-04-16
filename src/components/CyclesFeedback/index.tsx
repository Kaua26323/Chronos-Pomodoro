import { useTaskContext } from '@/contexts/TaskContext/useTaskContext';

type CycleType = 'workTime' | 'shortBreakTime' | 'longBreakTime';

type CycleFeedbackProps = {
  nextCycleType: CycleType;
};

const CYCLE_LABELS: Record<CycleType, string> = {
  workTime: 'Focus',
  shortBreakTime: 'Break',
  longBreakTime: 'Long break',
};

export function CycleFeedback({ nextCycleType }: CycleFeedbackProps) {
  const { state } = useTaskContext();
  const { activeTask, config } = state;

  const currentType = activeTask ? activeTask.type : nextCycleType;
  const label = CYCLE_LABELS[currentType];
  const duration = config[currentType];

  const message = activeTask
    ? `${label} for:`
    : `Next: ${label} (${duration} min)`;

  return (
    <>
      <span>
        {activeTask ? (
          <>
            {message} <b>{duration} min</b>
          </>
        ) : (
          message
        )}
      </span>
    </>
  );
}
