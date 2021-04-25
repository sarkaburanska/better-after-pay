import { Provider } from '../../context';
import { render, screen } from '@testing-library/react';
import ExpirationClock from './index';
import moment from 'moment';

test('render Expiration clock with button', () => {
  const contextValues = {
    isLoading: false,
    error: null,
    barcode: {
      barcode: null,
      expiration: null,
    }
  };
  render(
    <Provider mockInitialState={contextValues}>
      <ExpirationClock />
    </Provider>
  );
  expect(screen.getByText('New Barcode')).toBeInTheDocument();
});

test('render Expiration clock with time running', () => {
  const contextValues = {
    isLoading: false,
    error: null,
    barcode: {
      barcode: null,
      expiration: moment().add(1, 'minutes'),
    }
  };
  render(
    <Provider mockInitialState={contextValues}>
      <ExpirationClock />
    </Provider>
  );
  expect(screen.queryByText('New Barcode')).toBeNull();
});

