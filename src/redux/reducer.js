import { ADD_NEW, LIKE_ITEM, REMOVED_ITEM, LOAD_ITEM, EDIT_ITEM } from "./actions";
import * as  _ from 'lodash';
import { saveData } from '../shared/indexDB';

const initialAppState = [{
    items: [],
}];

export default function reducer(state = initialAppState, action) {
    switch (action.type) {
        case ADD_NEW:
            const itemsAdd = _.cloneDeep(state.items);
            itemsAdd.push(action.payload);
            saveData(itemsAdd);
            return { items: itemsAdd };
        case EDIT_ITEM:
            const itemsEdit = _.cloneDeep(state.items);
            const editingItem = itemsEdit.find(i => i.id === action.payload.id);
            Object.assign(editingItem, action.payload);
            saveData(itemsEdit);
            return { items: itemsEdit };
        case LIKE_ITEM:
            const itemsLike = _.cloneDeep(state.items);
            const likedItem = itemsLike.find(i => i.id === action.payload.id);
            likedItem.liked = !likedItem.liked;
            saveData(itemsLike);
            return { items: itemsLike };
        case REMOVED_ITEM:
            const itemsRemove = _.cloneDeep(state.items);
            const index = itemsRemove.findIndex(i => i.id === action.payload);
            itemsRemove.splice(index, 1);
            saveData(itemsRemove);
            return { items: itemsRemove };
        case LOAD_ITEM:
            return { items: action.payload }
        default:
            return state;
    }
}