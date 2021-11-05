import s from './CurrentWeather.module.css';
import PropTypes from 'prop-types';
import timeConverter from '../../service/timeConverter';

export default function CurrentWeatherUa ({ currentWeather }){
    const { name, sys, main, wind, weather } = currentWeather;
    const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div>
        <h2 className={s.title}>Погода в місті <span className={s.capitalize}>{name}</span></h2>
        <div className={s.box}>
            <div className={s.margin}>
                {main.feels_like && <p>Відчувається як {main.feels_like}C </p>}
                {main.humidity && <p>Вологість {main.humidity}%</p>}
                {main.pressure && <p>Атмосферний тиск {main.pressure}hPa</p>}
                {main.temp && <p>Температура в даний момент {main.temp}С</p>}
                {main.temp_min && <p>Мінімально можлива темература {main.temp_min}С</p>}
                {main.temp_max && <p>Максимально можлива температура {main.temp_max}С</p>}
                {main.grnd_level && <p>Атмосферний тиск на рівні землі {main.grnd_level}hPa</p>}
            </div>
            <div>
                {sys.sunrise && <p>Схід сонця - {timeConverter(sys.sunrise)}</p>}
                {sys.sunset && <p>Захід сонця - {timeConverter(sys.sunset)}</p>}
                {wind.speed && <p>Швидкість повітря {wind.speed} м/с</p>}
                {(wind.gust || wind.gust === 0) && <p>Пориви вітру {wind.gust} м/с</p>}
                {weather[0].description && <div className={s.flex}>
                    <p>Погодні умови </p>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p>
                </div>}
            </div>   
        </div>
        </div>
}

CurrentWeatherUa.propTypes = {
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