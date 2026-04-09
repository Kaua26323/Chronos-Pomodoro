import { afterEach, expect, vi } from 'vitest';

import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/vitest';

import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(async () => {
  // Limpa o DOM entre os testes (remove o que foi renderizado)
  cleanup();

  // Reseta todos os spies e mocks do Vitest (`vi.fn`, `vi.spyOn`, etc.)
  // Garante que os testes sejam independentes e não tenham "lixo" de execuções anteriores
  vi.resetAllMocks();
});
