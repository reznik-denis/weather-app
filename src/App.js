import { useEffect} from 'react/cjs/react.development';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import Form from './Components/Form';
import Section from './Components/Section';
import CurrentWeather from './Components/CurrentWeather'
import SearchHistory from './Components/SearchHistory'
import { getLanguage, getCurrentSearch, getCurrentSerch } from './redux/selectors'
import { fetchSearch } from './redux/operations'
import Loader from './Components/Loader/Loader'

function App() {
  const name = useSelector(getCurrentSearch);
  const language = useSelector(getLanguage);
  const currentWeather = useSelector(getCurrentSerch);
  const loader = useSelector(state => state.main.loader);
  // const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearch(name))
  }, [dispatch, name]
  );

  return <div className="App">
    <div className="flex">
      {loader && <Loader/>}
      {/* {error && <h1>{error.massage}</h1>} */}
      <Form/>
      {language === 'en' &&
        <Section title="Current weather">
        {currentWeather && <CurrentWeather/>}
        </Section>}
      {language === 'ru' &&
        <Section title="Текущая погода">
          {currentWeather && <CurrentWeather/>}
        </Section>}
      {language === 'ua' && <Section title="Погода на сьогодні">
        {currentWeather && <CurrentWeather/>}
      </Section>}
    
    </div>
    <Section title="Search History">
      <SearchHistory/>
    </Section>
    <ToastContainer
          position="bottom-right"
          autoClose={3000}
        />
  </div>
}

export default App;
