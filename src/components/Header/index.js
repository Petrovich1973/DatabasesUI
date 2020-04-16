import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.less'

const Header = ({nav = []}) => (
    <header>
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
    </header>
)

// const Header = ({nav = []}) => (
//     <header>
//         <nav>
//             <ul>
//                 {nav
//                     .map(route => {
//                         if (route.headerNav && route.childs && route.childs.length) {
//                             return (
//                                 <li key={route.path}>
//                                     <ul>
//                                         {route.childs.map((subRoute, idxSub) => (
//                                             <li key={idxSub}>
//                                                 <NavLink to={route.path + subRoute.path}>
//                                                     <span>{subRoute.title}</span>
//                                                 </NavLink>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </li>
//                             )
//                         } else {
//                             return (
//                                 <li key={route.path}>
//                                     <NavLink to={route.path}>{route.title}</NavLink>
//                                 </li>
//                             )
//                         }
//                     })}
//             </ul>
//         </nav>
//     </header>
// )

export default Header