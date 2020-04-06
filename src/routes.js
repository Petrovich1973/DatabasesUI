import * as right from './constants/rights'
import {
    DashboardPage,
    ConsolePage,
    KafkaPage,
    PostgreSQLPage
} from './pages'

const routes = [
    {
        component: DashboardPage,
        path: '/index',
        title: 'Dashboard Page'
    },
    {
        component: ConsolePage,
        path: '/console',
        title: 'Console Page',
        rights: [right.WRITE_ALL, right.VIEW_ALL],
        childs: [
            {
                // Kafka Clusters
                component: KafkaPage,
                path: '/kafka',
                title: 'Kafka',
                rights: [right.WRITE_ALL, right.VIEW_ALL, right.KAFKA_USE]
            },
            {
                component: PostgreSQLPage,
                path: '/postgre',
                title: 'PostgreSQL',
                rights: [right.WRITE_ALL, right.VIEW_ALL, right.KAFKA_USE]
            }
        ]

    }
]

export default routes