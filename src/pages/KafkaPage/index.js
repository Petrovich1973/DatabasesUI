import React, {useEffect} from 'react'
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom'
import TitlePage from "../../components/TitlePage"
import Clusters from "./Clusters"
import {IconKafka} from "../../svg"

const KafkaPage = (props) => {
    const {title = 'Наименование страницы'} = props
    const match = useRouteMatch()

    useEffect(() => {
        document.title = title
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="screenPage">
            <TitlePage
                icon={<IconKafka height={'1em'} width={'1em'}/>}
                label={title}
                className={'align-center'}/>
            <Switch>
                <Redirect exact from={`${match.path}`} to={`${match.path}/clusters`}/>
                <Route path={`${match.path}/clusters`}>
                    <Clusters {...props}/>
                </Route>
            </Switch>
        </div>
    )
}

export default KafkaPage