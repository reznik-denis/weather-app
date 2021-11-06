import timeConverter from '../../../service/timeConverter';
import s from '../SearchHistory.module.css'

export default function HistoryItemRu({ state }) {
    const { name, sys, weather } = state;
    const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div><h3>Погода в городе {name}</h3>
                {sys.sunrise && <p>Время восхода - {timeConverter(sys.sunrise)}</p>}
                {sys.sunset && <p>Время заката - {timeConverter(sys.sunset)}</p>}
                {weather[0].description && <div className={s.flex}>
                    <p>Погодные условия </p>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p></div>}
            </div>
}
