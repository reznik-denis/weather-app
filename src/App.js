import { useState, useEffect } from 'react/cjs/react.development';
import { ToastContainer } from 'react-toastify';

import './App.css';

import Form from './Components/Form';
import Section from './Components/Section';
import { validationLanguage } from './service/validation'
import fetchImages from './service/fetchWeather'
import CurrentWeather from './Components/CurrentWeather'

function App() {
  const [name, setName] = useState('Киев');
  const [language, setLanguage] = useState('ru');
  const [error, setError] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null)

  useEffect(() => {
    setLanguage(validationLanguage(name));
    fetchSearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  const fetchSearch = () => {
     fetchImages(name, validationLanguage(name))
       .then(data => {
         setCurrentWeather(data);
       }).catch(error => setError(error));
  }

  const onSubmitForm = name => {
    setName(name);
  };

  return <div className="App">
    <div className="flex">
    <Form onSubmit={onSubmitForm} />
    <Section title="Current weather">
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
    </Section>
    </div>
    <Section title="Search History" />
    <ToastContainer
          position="bottom-right"
          autoClose={3000}
        />
  </div>
}

export default App;
