import s from '../WeatherSevenDays.module.css'

import {unixDayEn} from '../../../service/dayConverter'

export default function WeatherItemEn({ state }) {
    const { dt, weather, temp } = state;
    const dayOfWeek = unixDayEn(dt)
    const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    return <div><h3>{dayOfWeek}</h3>
                {temp.day && <p className={s.temp}>{temp.day > 0 ? `+${Math.round(temp.day)}` : Math.round(temp.day)}</p>}
                {weather[0].description && <div className={s.flex}>
                    <img className={s.icon} src={icon} alt={weather[0].main} />
                    <p>{weather[0].description}</p></div>}
            </div>
}
