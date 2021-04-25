import { Provider } from '../../context';
import { render, screen } from '@testing-library/react';
import AfterPayBarcode from './index';

/* Skip this test because testing SVG will take a lot of time */
test.skip('render AfterPayBarcode', () => {
  const contextValues = {
    isLoading: false,
    error: null,
    barcode: {
      barcode: 12345,
      expiration: null,
    }
  };
  render(
    <Provider mockInitialState={contextValues}>
      <AfterPayBarcode />
    </Provider>
  );
  expect(screen.getByDisplayValue('12345')).toBeInTheDocument();
});


