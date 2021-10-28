import React from "react";
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'*'} component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
