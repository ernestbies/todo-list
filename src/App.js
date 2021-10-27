import React from "react";
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route exact path={'*'} component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
