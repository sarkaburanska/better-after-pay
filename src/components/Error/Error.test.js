import { Provider } from '../../context';
import { render, screen } from '@testing-library/react';
import Error from './index';
import moment from 'moment';
import { SERVER_ERROR_MESSAGE, NOT_FOUND_MESSAGE } from '../../utils/constants';

test('render Error when 500', () => {
  const contextValues = {
    isLoading: false,
    error: { response: { status: 503 } },
    barcode: {
      barcode: null,
      expiration: null,
    }
  };
  render(
    <Provider mockInitialState={contextValues}>
      <Error />
    </Provider>
  );
  expect(screen.getByText(SERVER_ERROR_MESSAGE)).toBeInTheDocument();
});

test('render Error when response 404', () => {
  const contextValues = {
    isLoading: false,
    error: { response: { status: 404 } },
    barcode: {
      barcode: null,
      expiration: moment().add(1, 'minutes'),
    }
  };
  render(
    <Provider mockInitialState={contextValues}>
      <Error />
    </Provider>
  );
  expect(screen.queryByText(NOT_FOUND_MESSAGE)).toBeNull();
});

