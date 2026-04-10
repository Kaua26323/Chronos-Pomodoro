import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Header } from './components/Header';

export function App() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <h1>Bem vindo ao site!</h1>
        </main>
      </Container>
    </>
  );
}
