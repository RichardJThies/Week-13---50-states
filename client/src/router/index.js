//file containes vue router configuration
import { createRouter, createWebHashHistory } from "vue-router"
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'

export default createRouter({//creates router and makes it available to other files in the app
    history: createWebHashHistory(),//defines history mode
    routes: [//list (array) of components and their paths
        {
            path:'/',//sets the homepage of the app
            name: 'StateList',//associates/maps the component to the homepage
            component: StateList//no quotes
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        }
    ]
}) 













