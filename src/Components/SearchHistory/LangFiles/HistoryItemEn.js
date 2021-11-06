import timeConverter from '../../../service/timeConverter';
import s from '../SearchHistory.module.css'

export default function HistoryItemEn({ state }) {
    const { name, sys, weather } = state;
    const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div><h3>Weather in city {name}</h3>
                {sys.sunrise && <p>Sunrise time - {timeConverter(sys.sunrise)}</p>}
                {sys.sunset && <p>Sunset time - {timeConverter(sys.sunset)}</p>}
                {weather[0].description && <div className={s.flex}>
                    <p>Weather condition </p>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p></div>}
            </div>
};