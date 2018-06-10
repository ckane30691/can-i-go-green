import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    // must use 'require' (import only allowed at top of file)
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
    createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
);

export default configureStore;

// {
//     "id": "Assigned by database",
//     "company": "",
//     "city": "",
//     "country": "",
//     "item": "",
//     "sustainableOption": {
//         "name": "",
//         "costPerItem": {
//             "total": "",
//             "breakdown": {
//                 "First variable-your own variables, in terms of cost per item": "",
//                 "Second variable": "",
//                 "Third variable": ""
//             }
//         },
//         "quantity": "",
//         "usesPerItem": ""
//     },
//     "disposableOption": {
//         "name": "",
//         "costPerItem": {
//             "total": "",
//             "breakdown": {
//                 "First variable": "",
//                 "Second variable": "",
//                 "Third variable": ""
//             }
//         },
//         "quantity": "",
//         "usesPerItem": ""
//     }
// }
