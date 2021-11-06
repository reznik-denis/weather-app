import './App.css';
import { useEffect } from 'react/cjs/react.development';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import Form from './Components/Form';
import Loader from './Components/Loader/Loader'
import SectionSwitch from './Components/Section/SectionSwitch'
import SearchHistorySwitch from './Components/SearchHistory/SearchHistorySwitch'
import { getCurrentSearch, getLoading, getError, getSerchHistory} from './redux/selectors'
import { fetchSearch } from './redux/operations'


function App() {
  const name = useSelector(getCurrentSearch);
  const loader = useSelector(getLoading);
  const serchHistory = useSelector(getSerchHistory)
  const error = useSelector(getError);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchSearch(name))
  }, [dispatch, name]
  );

  return <div className="App">
      {error && <h1>{error}</h1>}
      <Form />
      {loader ? <Loader /> : <SectionSwitch />}
      {serchHistory && <SearchHistorySwitch />}
      <ToastContainer
            position="bottom-right"
            autoClose={3000}
          />
  </div>
}

export default App;
