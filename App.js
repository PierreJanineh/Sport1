/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./src/features/menu/reducer/categories.reducers";
import thunkMiddleWare from "redux-thunk";
import MainApp from "./src/components/MainApp";

const composedEnhancer = applyMiddleware(thunkMiddleWare);
const store = createStore(rootReducer, composedEnhancer);

const App = () => {
    return (
        <Provider store={store}>
            <MainApp />
        </Provider>
    );
};

export default App;
