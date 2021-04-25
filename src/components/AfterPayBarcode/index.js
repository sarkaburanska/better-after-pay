import React, { useContext, useEffect, useState } from 'react';
import Barcode from 'react-barcode';
import { Context } from '../../context';
import { isNilOrEmpty, isNotNilOrEmpty } from '../../utils/utils';
import { fetch } from '../../services/APIService';
import { FETCH_BARCODE } from '../../utils/constants';

const AfterPayBarcode = () => {
  const { state: { barcode, isLoading }, dispatch } = useContext(Context);
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

  return (
      <Barcode data-testid="barcode" value={code.toString()}  />
  )
}

export default AfterPayBarcode;
