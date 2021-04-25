import { render, screen } from '@testing-library/react';
import Loading from './index';

test('render Loading component', () => {
  const contextValues = {
    isLoading: true,
    error: null,
  };
  render(
    <Loading />
  );
  expect(screen.getByTestId('loading')).toBeInTheDocument();
});
