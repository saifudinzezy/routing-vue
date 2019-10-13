import User from './components/user/User.vue'
import Home from './components/Home.vue'

export const routes = [{
        path: '',
        component: Home
    },
    {
        // path: '/user/:id', //abc.com/user/10
        path: '/user',
        component: User
    },
];