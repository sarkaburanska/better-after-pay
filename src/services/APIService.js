import { BARCODE_API_ENDPOINT } from '../utils/constants';
import { isNotNilOrEmpty } from '../utils/utils';
import axios from 'axios';

export const fetch = (dispatch, actionType) => {
  return (async () => {
    try {
      dispatch({ type: actionType });
      const response = await axios.get(BARCODE_API_ENDPOINT);
      if (isNotNilOrEmpty(response)) {
        dispatch({ type: `${actionType}_SUCCESS`, payload: response?.data });
      }
    } catch (e) {
      dispatch({ type: `${actionType}_FAILURE`, payload: e });
    }
  });
};
