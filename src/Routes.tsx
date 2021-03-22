import React from 'react';
import { Switch, Route } from "react-router-dom";

import NotFound from './Components/Pages/NotFound';
import Home from './Components/Pages/Home';

class Routes extends React.Component {
    render() {
        return <>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/contact-the-owner" exact component={() => {window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"; return <>pleese wait</>}} />

                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>
        </>;
    }
}

export default Routes;