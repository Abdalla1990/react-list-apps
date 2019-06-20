
let cmsReducerDefaultState = [];

import { POST_LIST } from '../actions/appsData'
export default (state = cmsReducerDefaultState, action) => {
switch (action.type) {
case POST_LIST:
    return {...action.apps}
default:
    return state;
}
};