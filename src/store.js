import React, { createContext, useReducer } from 'react';
import { FETCH_BARCODE, FETCH_BARCODE_SUCCESS, FETCH_BARCODE_FAILURE } from './utils/constants';
import * as PropTypes from 'prop-types';

const barcodeInitState = {
  code: null,
  expiration: null
};

const initialState = {
  isLoading: false,
  error: null,
  barcode: barcodeInitState,
};

const store = createContext(initialState);
const { Provider } = store;

// In case of more reducers, i would use combineReducer and each of them separate to own file
const Context = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
      console.log('action', action, state);
      switch (action.type) {
        case FETCH_BARCODE:
          return { ...state, isLoading: true, barcode: barcodeInitState, error: { response: { status: 503 } } };
        case FETCH_BARCODE_SUCCESS:
          return {
            ...state, isLoading: false, barcode: {
              code: action.payload?.barcode, expiration: action.payload?.expiresAt
            }
          };
        case FETCH_BARCODE_FAILURE:
          return { ...state, isLoading: false, error: action.payload, barcode: barcodeInitState };
        default:
          throw new Error();
      }
    },
    initialState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

Context.propTypes = {
  children: PropTypes.node,
}

export { store, Context }
