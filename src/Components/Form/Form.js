import s from './form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { validationName } from '../../service/validation';
import { currentSearch } from '../../redux/actions'
import {getLanguage} from '../../redux/selectors'

export default function Form() {
    const [search, setSearch] = useState('');
    const language = useSelector(getLanguage);
    const dispatch = useDispatch();
  
    const handleOnChangeInput = event => {
        setSearch(event.currentTarget.value.toLowerCase());
    };

    const onSubmitHandler = event => {
        event.preventDefault();

        if (search.trim() === '') {
            toast.error("Введите название города!");
            return
        } else if (validationName(search)) {
            toast.error("Введите коректное название города!");
            reset();
            return
        } else {
            dispatch(currentSearch(search))
        };
    
        reset();
    }

    const reset = () => {
        setSearch('');
    };

    return <form className={s.form} onSubmit={onSubmitHandler}>
        {language === 'en' &&
        <label className={s.lableForm} htmlFor="city">Enter your city</label>}
        {language === 'ru' &&
        <label className={s.lableForm} htmlFor="city">Введите название города</label>}
        {language === 'ua' &&
            <label className={s.lableForm} htmlFor="city">Введіть назву міста</label>}
        <input
            className={s.inputLable}
            type="text"
            id="city"
            value={search}
            onChange={handleOnChangeInput}
            autoComplete="off"
            autoFocus/>
    </form>
}