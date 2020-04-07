import * as right from './constants/rights'
import {
    DashboardPage,
    ConsolePage,
    KafkaPage,
    GridGainPage,
    PostgreSQLPage
} from './pages'

const routes = [
    {
        component: DashboardPage,
        path: '/index',
        title: 'Dashboard'
    },
    {
        component: ConsolePage,
        path: '/console',
        title: 'Console Page',
        headerNav: true,
        childs: [
            {
                // Kafka Clusters
                component: KafkaPage,
                path: '/kafka',
                title: 'Kafka',
                rights: [right.WRITE_ALL, right.VIEW_ALL, right.KAFKA_USE]
            },
            {
                component: GridGainPage,
                path: '/gridgain',
                title: 'GridGain',
                rights: [right.WRITE_ALL, right.VIEW_ALL, right.GRIDGAIN_USE]
            },
            {
                component: PostgreSQLPage,
                path: '/postgre',
                title: 'PostgreSQL',
                rights: [right.WRITE_ALL, right.VIEW_ALL, right.POSTGRESQL_USE]
            }
        ]

    }
]

export default routes