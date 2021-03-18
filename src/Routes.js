import React from 'react';
import { Switch, Route } from "react-router-dom";

import NotFound from './Components/Pages/NotFound';

class Routes extends React.Component {
    render() {
        return <>
            <Switch>

                <Route exact path="/">
                    {/* Benis */}
                </Route>

                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>
        </>;
    }
}

export default Routes;