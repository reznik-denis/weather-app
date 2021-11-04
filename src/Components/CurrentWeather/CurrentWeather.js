import s from './CurrentWeather.module.css';
import PropTypes from 'prop-types';
import timeConverter from '../../service/timeConverter';

export default function CurrentWeather({ currentWeather }) {
    const { name, sys, main, wind, weather } = currentWeather;
    const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div>
        <h2 className={s.title}>Weather in <span className={s.capitalize}>{name}</span></h2>
        <div className={s.box}>
            <div className={s.margin}>
                {main.feels_like && <p>Feels like {main.feels_like}C </p>}
                {main.humidity && <p>Humidity {main.humidity}%</p>}
                {main.pressure && <p>Atmospheric pressure {main.pressure}hPa</p>}
                {main.temp && <p>Temperature at the moment {main.temp}С</p>}
                {main.temp_min && <p>Minimum temperature at the moment {main.temp_min}С</p>}
                {main.temp_max && <p>Maximum temperature at the moment {main.temp_max}С</p>}
                {main.grnd_level && <p>Atmospheric pressure on the ground level {main.grnd_level}hPa</p>}
            </div>
            <div>
                {sys.sunrise && <p>Sunrise time - {timeConverter(sys.sunrise)}</p>}
                {sys.sunset && <p>Sunset time - {timeConverter(sys.sunset)}</p>}
                {wind.speed && <p>Wind speed {wind.speed} meter/sec</p>}
                {wind.gust && <p>Wind gust {wind.gust} meter/sec</p>}
                {weather[0].description && <div className={s.flex}>
                    <p>Weather condition </p>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p>
                </div>}
            </div>   
        </div>
    </div>
};

CurrentWeather.propTypes = {
    currentWeather: PropTypes.shape({
        name: PropTypes.string.isRequired,
        main: PropTypes.shape({
            feels_like: PropTypes.number,
            humidity: PropTypes.number,
            pressure: PropTypes.number,
            temp: PropTypes.number,
            temp_min: PropTypes.number,
            temp_max: PropTypes.number,
            grnd_level: PropTypes.number,
        }),
        sys: PropTypes.shape({
            sunrise: PropTypes.number,
            sunset: PropTypes.number,
        }),
        wind: PropTypes.shape({
            speed: PropTypes.number,
            gust: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string,
            main: PropTypes.string,
            icon: PropTypes.string,
    }))
    })
};