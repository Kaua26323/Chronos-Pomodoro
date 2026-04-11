import './styles/theme.css';
import './styles/global.css';

import { Header } from './components/Header';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { PomodoroForm } from './components/PomodoroForm';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Header />
      <Container>
        <CountDown />
        <PomodoroForm />
        <Footer />
      </Container>
    </>
  );
}
