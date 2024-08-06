import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import {server} from './src/test/mock/server';
import * as vitest from 'vitest';

// Assign all Vitest exports to the global object
Object.assign(window, vitest);

// Cleanup after each test
vitest.afterEach(() => {
  cleanup()
})
beforeAll(() => server.listen());

// Reset any request handlers that are declared as a part of our tests (i.e., for testing one-time use cases)
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());
