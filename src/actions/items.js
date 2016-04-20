import {
  ADD_ITEM,
  DELETE_ITEM,
} from './constants';

export function addItem(fields) {
  return {
    type: ADD_ITEM,
    fields,
  };
}

export function delItem(index) {
  return {
    type: DELETE_ITEM,
    index,
  };
}
