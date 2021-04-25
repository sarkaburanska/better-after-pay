import React, { useContext } from 'react';
import './App.css';
import AfterPayBarcode from './components/AfterPayBarcode';
import ExpirationClock from './components/ExpirationClock';
import { store } from './store';
import Loading from './components/Loading';
import { isNotNilOrEmpty, isNilOrEmpty } from './utils/utils';
import Error from './components/Error';

const App = () => {
  const { state: { isLoading, error } } = useContext(store);
  return (
    <div className="App">
      <div>
        <h1>Barcode</h1>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            {isNotNilOrEmpty(error) && <Error />}
            {isNilOrEmpty(error) &&
            <>
              <AfterPayBarcode />
            </>
            }
            <ExpirationClock />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
