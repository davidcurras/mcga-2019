import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Products from './components/screens/Products'
import Orders from './components/screens/Orders'
import Buy from './components/screens/Buy'

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/orders" component={Orders} />
                    <Route exact path="/buy" component={Buy} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes