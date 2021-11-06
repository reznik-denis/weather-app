import { useSelector } from 'react-redux';

import { getLanguage, getWeatherListDaily } from '../../redux/selectors';
import Section from './Section';
import WeatherList from './WeatherList';

export default function SectionSwitch() {
    const state = useSelector(getWeatherListDaily)
    const language = useSelector(getLanguage);
   
    switch (language) {
        case 'en':
        return <Section title="Weather at 7 days ado">
           {state && <WeatherList/>}
        </Section>;
        
        case  'ru':
        return <Section title="Погода за предыдущие 7 дней">
        {state && <WeatherList/>}
        </Section>;
        
        case  'ua':
        return <Section title="Погода за попередні 7 днів">
        {state && <WeatherList/>}
        </Section>;

        default:
        return;}}