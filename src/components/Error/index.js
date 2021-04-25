import React, { useContext, useEffect, useState } from 'react';
import './error.css';
import { Context } from '../../context';
import { isNotNilOrEmpty } from '../../utils/utils';
import { SERVER_ERROR_MESSAGE, NOT_FOUND_MESSAGE, DEFAULT_ERROR_MESSAGE } from '../../utils/constants';
import SadFace from '../../images/sad.png';

const Error = () => {
  const { state: { error } } = useContext(Context);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (isNotNilOrEmpty(error)) {
      switch (error?.response?.status) {
        case 500:
        case 503:
          setErrorMessage(SERVER_ERROR_MESSAGE);
          break;
        case 400:
        case 404:
          setErrorMessage(NOT_FOUND_MESSAGE);
          break;
        default:
          setErrorMessage(DEFAULT_ERROR_MESSAGE);
      }
    }
  }, [error])

  return (
    <div className="error">
        <img src={SadFace} alt="sad face emoji" className="emoji" />
      <p>{errorMessage}</p>
    </div>
  );
}

export default Error;
