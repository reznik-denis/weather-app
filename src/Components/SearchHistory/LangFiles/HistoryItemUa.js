import timeConverter from '../../../service/timeConverter';
import s from '../SearchHistory.module.css'

export default function HistoryItemUa({ state }) {
    const { name, sys, weather } = state;
    const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div><h3>Погода в місті {name}</h3>
                {sys.sunrise && <p>Схід сонця - {timeConverter(sys.sunrise)}</p>}
                {sys.sunset && <p>Захід сонця - {timeConverter(sys.sunset)}</p>}
                {weather[0].description && <div className={s.flex}>
                    <p>Погодні умови </p>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p></div>}
            </div>
}
