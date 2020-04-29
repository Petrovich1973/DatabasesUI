import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.less'
import {IconMore, IconUser} from "../../svg";
import Button from "../Button";

const Header = ({nav = []}) => (
    <header>
        <div className="left">
            <span>Web Console</span>
        </div>
        <nav>
            <ul>
                {nav
                    .map(route => {
                        const {path = '', title = '', icon = null} = route
                        return (
                            <li key={path}>
                                <NavLink to={path}>
                                    {icon}
                                    <span>{title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
            </ul>
        </nav>
        <div className="right">
            <IconUser size={'1.6em'}/>
            <span className="user-name"><small>Administrator Ivanov Ivan Ivanovich</small></span>
            <Button icon={<IconMore size={'1em'}/>} className="sm"/>
        </div>
    </header>
)

export default Header