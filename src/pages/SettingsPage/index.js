import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import * as type from '../../constants/actionTypes'
import './Settings.less'
import TitlePage from "../../components/TitlePage"
import {IconSettings} from "../../svg"
import Button from "../../components/Button"
// import Button from "../../components/Button"
// import Progress from "../../components/Progress"
// import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
// import 'react-circular-progressbar/dist/styles.css'


const SettingsPage = (props) => {
    const {settings, dispatch} = props

    const [title] = useState('Settings Web Console')
    const [hostApi, setHostApi] = useState('')
    const [saveBtn, setSaveBtn] = useState(false)
    const [codeClusters] = useState(`
    [
        {
            "id": 1010,
            "name": "clusterName_000",
            "host": "localhost:9100",
            "topics": {
                "total": 23
            },
            "partitions": {
                "total": 78,
                "online": 17,
                "inSync": 58,
                "outOfSync": 20,
                "underReplicated": 0
            },
            "controllerId": 32461,
            "system": {
                "cpu": 27,
                "disk": "1000Gb/1200Gb",
                "ram": "920Mb/2400Mb"
            }
        },
        ...
    ]
    `)
    const [codeTopics] = useState(`
    [
        {
          "id": 1010,
          "name": "topicrName_000",
          "messagesRead": 45,
          "messagesWrite": 45,
          "underReplicated": 23,
          "inSync": 89,
          "outOfSync": 36,
          "bytesInPerSec": 81,
          "bytesOutPerSec": 17
        },
        ...
    ]
    `)

    useEffect(() => {
        document.title = title
        setHostApi(settings.hostApi)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChangeHostApi = value => {
        setHostApi(value)
        setSaveBtn(settings.hostApi !== value)
    }

    const onKeyUpHostApi = e => {
        if (e.keyCode === 13) {
            handleUpdate()
        }
    }

    const handleUpdate = () => {
        dispatch({
            type: type.APP_SETTINGS_UPDATE,
            payload: {hostApi}
        })
        setSaveBtn(false)
    }

    return (
        <div className="settingsPage" style={{height: '100%', overflow: 'hidden'}}>
            &nbsp;
            <TitlePage icon={<IconSettings size={'1em'}/>} label={title} className="flex-center"/>
            <div className="rowGroup">
                <h5>host services api</h5>
                <div className="fieldInput">
                    <input
                        type="text"
                        value={hostApi}
                        onKeyUp={onKeyUpHostApi}
                        onChange={e => onChangeHostApi(e.target.value)}/>
                </div>
                {saveBtn ? <Button
                    text={'Save'}
                    className="sl green"
                    onClick={handleUpdate}/> : null}
            </div>

            <div className="code scrollhide" style={{height: '100%', overflow: 'auto'}}>
                <code>
                    <pre>
                        HOST SERVICES API/clusters and HOST SERVICES API/clusters/:id
                        {codeClusters}
                    </pre>
                </code>
                <code>
                    <pre>
                        HOST SERVICES API/clusters/:cluster/topics and HOST SERVICES API/clusters/:cluster/topics/:id
                        {codeTopics}
                    </pre>
                </code>
            </div>

        </div>
    )
}

SettingsPage.displayName = 'SettingsPage'

const mapStateToProps = state => ({
    settings: state.reducerApp.settings
})

export default connect(mapStateToProps)(SettingsPage)
