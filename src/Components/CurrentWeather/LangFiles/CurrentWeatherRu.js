import s from '../CurrentWeather.module.css';
import timeConverter from '../../../service/timeConverter';
import { getCurrentWeather } from '../../../redux/selectors'
import { useSelector} from 'react-redux';

export default function CurrentWeatherRu() {
    const { name, sys, main, wind, weather } = useSelector(getCurrentWeather);
    const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div>
        <h2 className={s.title}>Погода в городе <span className={s.capitalize}>{name}</span></h2>
        <div className={s.box}>
            <div className={s.margin}>
                {main.feels_like && <p>Ощущается как {main.feels_like}C </p>}
                {main.humidity && <p>Влажность {main.humidity}%</p>}
                {main.pressure && <p>Атмосферное давление {main.pressure}hPa</p>}
                {main.temp && <p>Температура в даный момент {main.temp}С</p>}
                {main.temp_min && <p>Минимально возможная температура {main.temp_min}С</p>}
                {main.temp_max && <p>Максимально возможная температура {main.temp_max}С</p>}
                {main.grnd_level && <p>Атмосферное давление на уровне земли {main.grnd_level}hPa</p>}
            </div>
            <div>
                {sys.sunrise && <p>Время восхода - {timeConverter(sys.sunrise)}</p>}
                {sys.sunset && <p>Время заката - {timeConverter(sys.sunset)}</p>}
                {(wind.speed || wind.speed === 0) && <p>Скорость ветра {wind.speed} м/с</p>}
                {(wind.gust || wind.gust === 0) && <p>Порывы ветра {wind.gust} м/с</p>}
                {weather[0].description && <div className={s.flex}>
                    <p>Погодные условия </p>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p>
                </div>}
            </div>   
        </div>
    </div>
}