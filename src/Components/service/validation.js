import validator from 'validator';
import 'react-toastify/dist/ReactToastify.css';

export function validationLanguage(search) {
    const val = search.replace(/\s/g, '');
    const validation = {
            en: validator.isAlpha(val),
            ua: validator.isAlpha(val, 'uk-UA'),
            ru: validator.isAlpha(val, 'ru-RU')
    };
    if (validation.en) {
        return 'en';
    } else if (validation.ru) {
        return 'ru';
    } else if (validation.ua) {
        return 'ua';
    }
}

export function validationName(search) {
    const val = search.replace(/\s/g, '');
    const validation = {
            en: validator.isAlpha(val),
            ua: validator.isAlpha(val, 'uk-UA'),
            ru: validator.isAlpha(val, 'ru-RU')
        };
    
        return (validation.en === false
            && validation.ua === false
            && validation.ru === false)
}