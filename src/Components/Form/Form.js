import { useState } from 'react';
import { validationName } from '../../service/validation';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './form.module.css';

export default function Form({onSubmit, language}) {
    const [search, setSearch] = useState('');

    const handleOnChangeInput = event => {
        setSearch(event.currentTarget.value.toLowerCase());
    };

    const onSubmitHandler = event => {
        event.preventDefault();

        if (search.trim() === '') {
            toast.error("Введите название города!");
            return
        }
        if (validationName(search)) {
            toast.error("Введите коректное название города!");
            reset();
            return
        }
    
        onSubmit(search); 
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

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
};
