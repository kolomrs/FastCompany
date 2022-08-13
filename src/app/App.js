import React from "react";
import Users from "./components/users";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import UsersLayout from "./components/usersLayout";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/" exact component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
                <Route
                    path="/users/:userId?"
                    exact
                    component={UsersLayout}
                />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
