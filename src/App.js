import React from 'react'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'
import {NotFoundPage} from './pages'
import './App.less'

import routes from './routes'

const App = (props) => {

    const renderRoutes = routes.map(route => {
        const {path, component} = route
        return (
            <Route key={path} path={path} component={component} {{...props, ...route}}/>
        )
    })

    return (
        <div className="App">
            <div className="container-content">
                <Header/>
                <div className="wrap-content">
                    <Switch>
                        <Redirect exact from='/' to='/index'/>
                        {renderRoutes}
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App