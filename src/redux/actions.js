
export const ADD_NEW = 'ADD_NEW';
export const LIKE_ITEM = 'LIKE_ITEM';
export const REMOVED_ITEM = 'REMOVED_ITEM';
export const LOAD_ITEM = 'REFRESH_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const editItem = item => {
    return {
        type: EDIT_ITEM,
        payload: item
    }
}
export const addNewItem = item => {
    return {
        type: ADD_NEW,
        payload: item
    };
}

export const likeItem = item => {
    return {
        type: LIKE_ITEM,
        payload: item
    };
}

export const removeItem = key => {
    return {
        type: REMOVED_ITEM,
        payload: key
    };
}

export const loadItems = list => {
    return {
        type: LOAD_ITEM,
        payload: list
    };
}