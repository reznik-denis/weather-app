// import s from './SearchHistory.module.css'
import { useSelector } from 'react-redux';

export default function SearchHistory() {
    const state = useSelector(state => state.main.searchHistory)
    return <div>
        <ul>
                {state.map(({date, search}) => 
                    <li key={date}>
                        <p>Вы искали погоду в городе {search}</p>
                   </li>
                )}
        </ul>
    </div>
}