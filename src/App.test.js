import App from './App';
import { Provider } from './context';
import { render, screen } from '@testing-library/react';
import Loading from './components/Loading';

test('render App with title', () => {
  const contextValues = {
    isLoading: false,
    error: null,
  };
  render(
    <Provider value={contextValues}>
      <App />
    </Provider>
  );
  expect(screen.getByText('Barcode')).toBeInTheDocument();
});

