import './App.css';
import { useEffect } from 'react/cjs/react.development';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import Form from './Components/Form';
import Loader from './Components/Loader/Loader';
import SectionSwitch from './Components/Section/SectionSwitch';
import SectinWeatherSevenDays from './Components/WeatherSevenDay/SectionSwitch';
import SearchHistorySwitch from './Components/SearchHistory/SearchHistorySwitch';
import { getCurrentSearch, getLoading, getError, getCurrentWeather, getSerchHistory, getLanguage } from './redux/selectors';
import { fetchSearch, fetchSearchSevenDaysAgo } from './redux/operations';


function App() {
  const name = useSelector(getCurrentSearch);
  const language = useSelector(getLanguage);
  const loader = useSelector(getLoading);
  const currentFetch = useSelector(getCurrentWeather);
  const serchHistory = useSelector(getSerchHistory)
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch(name))
  }, [dispatch, name]
  );

  useEffect(() => {
    if (currentFetch) {
      dispatch(fetchSearchSevenDaysAgo(currentFetch.coord.lat, currentFetch.coord.lon, language))
    }
  }, [dispatch, currentFetch, language]
  );

  return <div className="App">
      {error && <h1>{error}</h1>}
      <Form />
    {loader ? <Loader /> : <SectionSwitch />}
    <SectinWeatherSevenDays/>
      {serchHistory && <SearchHistorySwitch />}
      <ToastContainer
            position="bottom-right"
            autoClose={3000}
          />
  </div>
}

export default App;
