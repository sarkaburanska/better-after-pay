import React, { useState, useContext, useEffect, useCallback } from 'react';
import { isNotNilOrEmpty, isNilOrEmpty } from '../../utils/utils';
import { store } from '../../store';
import moment from 'moment';
import { fetch } from '../../services/APIService';
import { FETCH_BARCODE } from '../../utils/constants';
import './expirationClock.css';

const ExpirationClock = () => {
  const { state: { barcode }, dispatch } = useContext(store);
  const fetchBarcode = fetch(dispatch, FETCH_BARCODE);
  const [expiration, setExpiration] = useState(null);

  const getDiff = useCallback((date) => {
    return moment(date).diff(moment(), 'seconds');
  }, []);

  useEffect(() => {
    if (isNotNilOrEmpty(barcode?.expiration)) {
      setExpiration(getDiff(barcode?.expiration));
    }
  }, [barcode?.expiration]);

  useEffect(() => {
    if (isNotNilOrEmpty(expiration)) {
      if (expiration > 0) {
        setTimeout(() => setExpiration(getDiff(barcode?.expiration)), 1000);
      } else {
        setExpiration(null);
      }
    }
  }, [expiration])

  return (
    <>
      <p>{isNotNilOrEmpty(expiration) && moment().startOf('day')
        .seconds(expiration)
        .format('mm:ss')}
      </p>
      {(isNilOrEmpty(expiration) || expiration === 0) && <button onClick={fetchBarcode}>New Barcode</button>}
    </>
  )
}

export default ExpirationClock;
