import {
    SET_RECENT_POST
} from '../actions/types';
import recentPosts from '../components/recentPosts';
import actions from 'redux-form/lib/actions';

const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:
            
            return[...state, recentPosts:actions.payload];
    
        default:
           return state;
    }
}