import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'
import {NotFoundPage} from './pages'
import './App.less'
import routes from './routes'
import Header from "./components/Header"
import isRight from "./utils/isRight"

const App = (props) => {
    const {rightsCurrent} = props

    const renderRoutes = routes
        .filter(route => {
            const {rights = []} = route
            if(!rights.length) return true
            return isRight(rights, rightsCurrent)
        })

    return (
        <div className="App">
            <Header nav={renderRoutes}/>
            <Switch>
                <Redirect exact from='/' to='/index'/>
                {renderRoutes
                    .map(route => {
                        const {path} = route
                        return (
                            <Route
                                key={path}
                                path={path}
                                render={props => <route.component
                                    {...props}
                                    {...{...route}}/>}/>
                        )
                    })}
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
}

App.displayName = 'App'

const mapStateToProps = state => ({
    rightsCurrent: state.reducerApp.current.user.rights
})

export default connect(mapStateToProps)(App)