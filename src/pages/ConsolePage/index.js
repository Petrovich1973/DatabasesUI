import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route, Switch, useRouteMatch, Link} from 'react-router-dom'
import NotFoundPage from "../NotFoundPage"
import isRight from "../../utils/isRight"

const ConsolePage = (props) => {
    const {title = 'Наименование страницы', childs = [], rightsCurrent = []} = props
    let match = useRouteMatch()
    const [first] = childs

    const renderRoutes = childs
        .filter(route => {
            const {rights = []} = route
            return isRight(rights, rightsCurrent)
        })

    return (
        <>
            <Link to={`${match.path}`}>
                {title}
            </Link>
            {renderRoutes.map(route => <Link key={route.path} to={`${match.path}${route.path}`}>
                {route.title}
            </Link>)}
            <Switch>
                <Redirect exact from={`${match.path}`} to={`${match.path}${first.path}`}/>
                {renderRoutes
                    .map(route => {
                        const {path} = route
                        return (
                            <Route
                                key={path}
                                path={`${match.path}${path}`}
                                render={props => <route.component
                                    {...props}
                                    {...{...route}}/>}/>
                        )
                    })}
                <Route component={NotFoundPage}/>
            </Switch>
        </>
    )
}

ConsolePage.displayName = 'ConsolePage'

const mapStateToProps = state => ({
    rightsCurrent: state.reducerApp.current.user.rights
})

export default connect(mapStateToProps)(ConsolePage)
