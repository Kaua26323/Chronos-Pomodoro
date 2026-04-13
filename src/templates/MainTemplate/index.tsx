import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';

export function MainTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container>
        {children}
        <Footer />
      </Container>
    </>
  );
}
