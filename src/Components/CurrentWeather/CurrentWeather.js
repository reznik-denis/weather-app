import PropTypes from 'prop-types';
import CurrentWeatherEn from './CurrentWeatherEn';
import CurrentWeatherRu from './CurrentWeatherRu';
import CurrentWeatherUa from './CurrentWeatherUa'

export default function CurrentWeather({ currentWeather, language }) {
    return <>{language === 'en' &&
        <CurrentWeatherEn currentWeather={ currentWeather }/>}
      {language === 'ru' &&
        <CurrentWeatherRu currentWeather={ currentWeather }/>}
        {language === 'ua' && 
      <CurrentWeatherUa currentWeather={ currentWeather }/>}
        </>
};

CurrentWeather.propTypes = {
    language: PropTypes.string.isRequired,
};