import React from "react";
import { Provider } from "react-redux";

import ConnectedFilterList from "../containers/ConnectedFilterList";
import ConnectedPostList from "../containers/ConnectedPostList";

import DevTools from "../containers/DevTools";

const App = ( { store }) => (
    <Provider store={store}>
        <div>
            <h1>React/Redux blog app</h1>
            <div><ConnectedPostList /></div>
            <div><ConnectedFilterList /></div>
            { (process.env.NODE_ENV !== "production") &&<DevTools /> }
        </div>
    </Provider>
);

export default App;