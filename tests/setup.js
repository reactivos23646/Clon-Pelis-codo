import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

tests: {
    environment: 'jsdom',
    afterEach(() => {
        cleanup();
      });
  }