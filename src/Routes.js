import React from 'react';
import { Switch, Route } from "react-router-dom";

class Routes extends React.Component {
    render() {
        return <>
            <Switch>

                <Route exact path="/">
                    {/* Benis */}
                </Route>

                <Route path="*">
                    {/* 404 */}
                </Route>

            </Switch>
        </>;
    }
}

export default Routes;