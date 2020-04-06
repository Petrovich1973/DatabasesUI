import axios from 'axios';

import * as types from '../constants/actionTypes';
import {BASE_URL} from '../constants/urls';

// network actions
export const getSearchPage = () => {
    return function (dispatch, getState) {
        const store = getState();

        return store.searchPage;
    }
};

const handleCatch = (err, dispatch, timeRequest) => {
    try {
        const {data, status} = JSON.parse(JSON.stringify(err.response));
        console.log('isResponse', data);
        // dispatch(handleError({data: data.message || data, status: data.status || status}));
    } catch (e) {
        console.log(e.toString());
        // dispatch(handleError(err));
    }
    dispatch({
        type: types.SEARCH_PAGE_UPDATE,
        payload: {
            spinner: false,
            pending: dispatch(getSearchPage()).pending.filter(item => item.timeRequest !== timeRequest)
        }
    })
};

export const getListExplorerRequest = params => {
    return async dispatch => {

        const timeRequest = Date.now();
        dispatch({
            type: types.SEARCH_PAGE_UPDATE,
            payload: {
                pending: [...dispatch(getSearchPage()).pending, {timeRequest}]
            },
        });

        await axios.get(`${BASE_URL}api/data-files`, {
            params
        })
            .then((response) => {
                const {pending = []} = dispatch(getSearchPage()) || {};
                const {data = {}} = response || {};
                dispatch({
                    type: types.SEARCH_PAGE_UPDATE,
                    payload: {
                        pending: pending.filter(item => item.timeRequest !== timeRequest),
                        dataListFiles: data.dataListFiles
                    }
                })
            })
            .catch(error => {
                console.log(error);
                handleCatch(error, dispatch, timeRequest);
            })
    }
};

export const getListOfFolderRequest = params => {
    return async dispatch => {

        const timeRequest = Date.now();
        dispatch({
            type: types.SEARCH_PAGE_UPDATE,
            payload: {
                pending: [...dispatch(getSearchPage()).pending, {timeRequest}]
            }
        });

        await axios.get(`${BASE_URL}api/listOfFolders`, {
            params
        })
            .then(response => {
                const {pending = []} = dispatch(getSearchPage()) || {};
                const {data = []} = response || {};

                dispatch({
                    type: types.SEARCH_PAGE_UPDATE,
                    payload: {
                        pending: pending.filter(item => item.timeRequest !== timeRequest),
                        listAutocomplete: data.list
                    }
                })
            })
            .catch(error => {
                console.log(error);
                handleCatch(error, dispatch, timeRequest);
            })
    }
};
