import s from './SearchHistory.module.css'
import { useSelector, useDispatch } from 'react-redux';

import HistoryItem from './HistoryItem';
import { currentSearch } from '../../redux/actions'

export default function SearchHistory() {
    const state = useSelector(state => state.main.searchHistory)
    const dispatch = useDispatch();
    return <div>
        <ul className={s.list}>
                {state.map((s) => 
                    <li key={s.date} onClick={()=>dispatch(currentSearch(s.name))}>
                        <HistoryItem state={s}/>
                   </li>
                )}
        </ul>
    </div>
}