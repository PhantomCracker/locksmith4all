import Vue from 'vue';
import Router from 'vue-router';

import HomePage from "@/pages/HomePage";
import DefaultLayout from "@/layouts/DefaultLayout";

Vue.use(Router);

export  default new Router({
   routes: [
       {
           path: '/',
           component: DefaultLayout,
           children: [
               {
                   path: '/',
                   name: 'Home',
                   component: HomePage
               }
           ]
       }
   ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});