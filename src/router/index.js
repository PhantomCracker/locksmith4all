import Vue from 'vue';
import Router from 'vue-router';

import HomePage from "@/pages/HomePage";
import DefaultLayout from "@/layouts/DefaultLayout";
import AboutUs from "@/pages/AboutUs";
import LocksmithNearMe from "@/pages/LocksmithNearMe";
import BristolCity from "@/pages/BristolCity";
import BoltonCity from "@/pages/BoltonCity";
// import CitiesPage from "@/pages/CitiesPage";

Vue.use(Router);

export  default new Router({
    mode: 'history',
    routes: [
        {
           path: '/',
           component: DefaultLayout,
           children: [
               {
                   path: '/',
                   name: 'Home',
                   component: HomePage
               },
               {
                   path: '/about-us',
                   name: 'AboutUs',
                   component: AboutUs
               },
               {
                   path: '/locksmith-near-me',
                   name: 'LocksmithNearMe',
                   component: LocksmithNearMe
               },
               // {
               //     path: '/locksmith/:city',
               //     name: 'CitiesPage',
               //     component: CitiesPage
               // }
               {
                   path:'/Bristol',
                   name: 'BristolCity',
                   component: BristolCity
               },
               {
                   path:'/Bolton',
                   name: 'BoltonCity',
                   component: BoltonCity
               },
           ]
       }
   ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});