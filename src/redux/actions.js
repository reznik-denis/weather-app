import { createAction} from "@reduxjs/toolkit";
import { validationLanguage } from '../service/validation'

export const currentSearch = createAction('form/currentSearch', search => {
    return {
        payload: {
            search,
            language: validationLanguage(search),
        }
    }
})

export const fetchSerchRequest = createAction('app/fetchSerchRequest');
export const fetchSerchSuccess = createAction('app/fetchSerchSuccess');
export const fetchSerchError = createAction('app/fetchSerchError');