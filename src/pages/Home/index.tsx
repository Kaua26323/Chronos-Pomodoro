import { CountDown } from '@/components/CountDown';
import { PomodoroForm } from '@/components/PomodoroForm';
import { MainTemplate } from '@/templates/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <CountDown />
      <PomodoroForm />
    </MainTemplate>
  );
}
