import {
    fetchSerchRequest,
    fetchSerchSuccess,
    fetchSerchError,
} from './actions';
import fetchImages from '../service/fetchWeather'
import { validationLanguage } from '../service/validation'

export const fetchSearch = (name) => async dispatch => {
    dispatch(fetchSerchRequest());
    try {
        const search = await fetchImages(name, validationLanguage(name))
        dispatch(fetchSerchSuccess(search));
    } catch (error) {
        dispatch(fetchSerchError(error));
    };
}