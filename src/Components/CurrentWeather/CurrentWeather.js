import { useSelector } from 'react-redux';

import CurrentWeatherEn from './CurrentWeatherEn';
import CurrentWeatherRu from './CurrentWeatherRu';
import CurrentWeatherUa from './CurrentWeatherUa'
import {getLanguage} from '../../redux/selectors'

export default function CurrentWeather() {
    const language = useSelector(getLanguage);
    return <>{language === 'en' &&
        <CurrentWeatherEn />}
      {language === 'ru' &&
        <CurrentWeatherRu />}
        {language === 'ua' && 
            <CurrentWeatherUa />}
        </>
};