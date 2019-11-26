import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes.js';
import { Comments } from './comments.js';
import { Promotions } from './promotions.js';
import { Leaders } from './leaders.js';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
    return store;
}
