import { render, screen } from '@testing-library/react';
import App from './App';

test('teste titulo', () => {
  render(<App />);
  const testCase = document.querySelector('.App button');
  expect(testCase).toHaveTextContent(/painel de controle/i);
});

test('teste titulo 2', () => {
  render(<App />);
  const testCase = document.querySelector('.App button');
  expect(testCase).toHaveTextContent(/painel de controle/i);
});