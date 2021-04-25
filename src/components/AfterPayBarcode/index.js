import React, { useContext, useEffect, useState } from 'react';
import Barcode from 'react-barcode';
import { store } from '../../store';
import { isNilOrEmpty, isNotNilOrEmpty } from '../../utils/utils';
import { fetch } from '../../services/APIService';
import { FETCH_BARCODE } from '../../utils/constants';

const AfterPayBarcode = () => {
  const { state: { barcode, isLoading }, dispatch } = useContext(store);
  const [code, setCode] = useState(null);
  const fetchBarcode = fetch(dispatch, FETCH_BARCODE);

  useEffect(() => {
    if (isNotNilOrEmpty(barcode?.code)) {
      setCode(barcode.code);
    } else if (isNotNilOrEmpty(code)) {
      setCode(null);
    } else if (!isLoading) {
      fetchBarcode();
    }
  }, [barcode, code]);

  if (isNilOrEmpty(code)) {
    return null;
  }

  return <Barcode value={code} />
}

export default AfterPayBarcode;
