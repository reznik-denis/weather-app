import s from './WeatherSevenDays.module.css';
import { useSelector } from 'react-redux';
import { getWeatherListDaily } from '../../redux/selectors';
import WeatherItem from './WeatherItem';

export default function WeatherList() {
    const state = useSelector(getWeatherListDaily)
    return <div>
        <ul className={s.list}>
                {state.slice(0, 7).sort((a,b) => b.dt - a.dt).map((s) => 
                    <li key={s.dt}>
                        <WeatherItem state={s}/>
                   </li>
                )}
        </ul>
    </div>
}