//file containes vue router configuration
import { createRouter, createWebHashHistory } from "vue-router"
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import NotFound from '@/components/NotFound'

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
        },
        {
            path: '/map/:state', //path will match ":state" to any state
            name: 'StateMap',
            component: StateMap
        },
        {
            path: '/:pathMatch(.*)*',//uses a regexp. '.' to match any chars, '*' right after means as many as possible in the string, and the 2nd * is chars that repeat?
            name: 'NotFound',
            component: NotFound
        }
    ]
}) 













