import Vue from 'vue';
import Router from 'vue-router';

import HomePage from "@/pages/HomePage";
import DefaultLayout from "@/layouts/DefaultLayout";
import AboutUs from "@/pages/AboutUs";
import LocksmithNearMe from "@/pages/LocksmithNearMe";
import BristolCity from "@/pages/BristolCity";
import BoltonCity from "@/pages/BoltonCity";
import BrightonCity from "@/pages/BrightonCity";
import BirgminghamCity from "@/pages/BirgminghamCity";
import BradfordCity from "@/pages/BradfordCity";
import BromleyCity from "@/pages/BromleyCity";
import CreweCity from "@/pages/CreweCity";
import ColchesterCity from "@/pages/ColchesterCity";
import ChesterCity from "@/pages/ChesterCity";
import ChelmsfordCity from "@/pages/ChelmsfordCity";
import CambridgeCity from "@/pages/CambridgeCity";
import CoventryCity from "@/pages/CoventryCity";
import CroydonCity from "@/pages/CroydonCity";
import DurhamCity from "@/pages/DurhamCity";
import DerbyCity from "@/pages/DerbyCity";
import DoncasterCity from "@/pages/DoncasterCity";
import DarlingtonCity from "@/pages/DarlingtonCity";
import DudleyCity from "@/pages/DudleyCity";
import DartfordCity from "@/pages/DartfordCity";
import EnfieldCity from "@/pages/EnfieldCity";
import GuildfordCity from "@/pages/GuildfordCity";
import GlouchesterCity from "@/pages/GlouchesterCity";
import HarrowCity from "@/pages/HarrowCity";
import HemelCity from "@/pages/HemelCity";
import HuddersfieldCity from "@/pages/HuddersfieldCity";
import IpswichCity from "@/pages/IpswichCity";
import IlfordCity from "@/pages/IlfordCity";
import KingstonCity from "@/pages/KingstonCity";
import LeedsCity from "@/pages/LeedsCity";
import LiverpoolCity from "@/pages/LiverpoolCity";
import LutonCity from "@/pages/LutonCity";
import LeicesterCity from "@/pages/LeicesterCity";
import MiddlesbroughCity from "@/pages/MiddlesbroughCity";
import MiltonCity from "@/pages/MiltonCity";
import ManchesterCity from "@/pages/ManchesterCity";
import NottinghamCity from "@/pages/NottinghamCity";
import NorthamptonCity from "@/pages/NorthamptonCity";
import NewcastleCity from "@/pages/NewcastleCity";
import NorwichCity from "@/pages/NorwichCity";
import OxfordCity from "@/pages/OxfordCity";
import OldhamCity from "@/pages/OldhamCity";
import PeterboroughCity from "@/pages/PeterboroughCity";
import ReadingCity from "@/pages/ReadingCity";
import RedhillCity from "@/pages/RedhillCity";
import RomfordCity from "@/pages/RomfordCity";
import StokeCity from "@/pages/StokeCity";
import SheffieldCity from "@/pages/SheffieldCity";
import StevenageCity from "@/pages/StevenageCity";
import SwindonCity from "@/pages/SwindonCity";
import SunderlandCity from "@/pages/SunderlandCity";
import SloughCity from "@/pages/SloughCity";
import StockportCity from "@/pages/StockportCity";
import StAlbansCity from "@/pages/StAlbansCity";
import TwickenhamCity from "@/pages/TwickenhamCity";
import UxbridgeCity from "@/pages/UxbridgeCity";
import WiganCity from "@/pages/WiganCity";
import WarringtonCity from "@/pages/WarringtonCity";
import WolverhamptonCity from "@/pages/WolverhamptonCity";
import WakefieldCity from "@/pages/WakefieldCity";
import WatfordCity from "@/pages/WatfordCity";
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
                   path:'/Brighton',
                   name: 'BrightonCity',
                   component: BrightonCity
               },
               {
                   path:'/Bristol',
                   name: 'BristolCity',
                   component: BristolCity
               },
               {
                   path:'/Birgmingham',
                   name: 'BirgminghamCity',
                   component: BirgminghamCity
               },
               {
                   path:'/Bolton',
                   name: 'BoltonCity',
                   component: BoltonCity
               },
               {
                   path:'/Bradford',
                   name: 'BradfordCity',
                   component: BradfordCity
               },
               {
                   path:'/Bromley',
                   name: 'BromleyCity',
                   component: BromleyCity
               },
               {
                   path:'/Crewe',
                   name: 'CreweCity',
                   component: CreweCity
               },
               {
                   path:'/Colchester',
                   name: 'ColchesterCity',
                   component: ColchesterCity
               },
               {
                   path:'/Chester',
                   name: 'ChesterCity',
                   component: ChesterCity
               },
               {
                   path:'/Chelmsford',
                   name: 'ChelmsfordCity',
                   component: ChelmsfordCity
               },
               {
                   path:'/Cambridge',
                   name: 'CambridgeCity',
                   component: CambridgeCity
               },
               {
                   path:'/Coventry',
                   name: 'CoventryCity',
                   component: CoventryCity
               },
               {
                   path:'/Croydon',
                   name: 'CroydonCity',
                   component: CroydonCity
               },
               {
                   path:'/Durham',
                   name: 'DurhamCity',
                   component: DurhamCity
               },
               {
                   path:'/Derby',
                   name: 'DerbyCity',
                   component: DerbyCity
               },
               {
                   path:'/Doncaster',
                   name: 'DoncasterCity',
                   component: DoncasterCity
               },
               {
                   path:'/Darlington',
                   name: 'DarlingtonCity',
                   component: DarlingtonCity
               },
               {
                   path:'/Dudley',
                   name: 'DudleyCity',
                   component: DudleyCity
               },
               {
                   path:'/Dartford',
                   name: 'DartfordCity',
                   component: DartfordCity
               },
               {
                   path:'/Enfield',
                   name: 'EnfieldCity',
                   component: EnfieldCity
               },
               {
                   path:'/Guildford',
                   name: 'GuildfordCity',
                   component: GuildfordCity
               },
               {
                   path:'/Glouchester',
                   name: 'GlouchesterCity',
                   component: GlouchesterCity
               },
               {
                   path:'/Harrow',
                   name: 'HarrowCity',
                   component: HarrowCity
               },{
                   path:'/Hemel-Hempstead',
                   name: 'HemelCity',
                   component: HemelCity
               },
               {
                   path:'/Huddersfield',
                   name: 'HuddersfieldCity',
                   component: HuddersfieldCity
               },
               {
                   path:'/Ipswich',
                   name: 'IpswichCity',
                   component: IpswichCity
               },{
                   path:'/Ilford',
                   name: 'IlfordCity',
                   component: IlfordCity
               },
               {
                   path:'/Kingston-upon-Thames',
                   name: 'KingstonCity',
                   component: KingstonCity
               },
               {
                   path:'/Leeds',
                   name: 'LeedsCity',
                   component: LeedsCity
               },
               {
                   path:'/Liverpool',
                   name: 'LiverpoolCity',
                   component: LiverpoolCity
               },
               {
                   path:'/Luton',
                   name: 'LutonCity',
                   component: LutonCity
               },
               {
                   path:'/Leicester',
                   name: 'LeicesterCity',
                   component: LeicesterCity
               },
               {
                   path:'/Middlesbrough',
                   name: 'MiddlesbroughCity',
                   component: MiddlesbroughCity
               },
               {
                   path:'/Milton-Keynes',
                   name: 'MiltonCity',
                   component: MiltonCity
               },
               {
                   path:'/Manchester',
                   name: 'ManchesterCity',
                   component: ManchesterCity
               },
               {
                   path:'/Nottingham',
                   name: 'NottinghamCity',
                   component: NottinghamCity
               },
               {
                   path:'/Northampton',
                   name: 'NorthamptonCity',
                   component: NorthamptonCity
               },
               {
                   path:'/Newcastle',
                   name: 'NewcastleCity',
                   component: NewcastleCity
               },
               {
                   path:'/Norwich',
                   name: 'NorwichCity',
                   component: NorwichCity
               },
               {
                   path:'/Oxford',
                   name: 'OxfordCity',
                   component: OxfordCity
               },
               {
                   path:'/Oldham',
                   name: 'OldhamCity',
                   component: OldhamCity
               },
               {
                   path:'/Peterborough',
                   name: 'PeterboroughCity',
                   component: PeterboroughCity
               },
               {
                   path:'/Reading',
                   name: 'ReadingCity',
                   component: ReadingCity
               },
               {
                   path:'/Redhill',
                   name: 'RedhillCity',
                   component: RedhillCity
               },
               {
                   path:'/Romford',
                   name: 'RomfordCity',
                   component: RomfordCity
               },
               {
                   path:'/Stoke-on-Trent',
                   name: 'StokeCity',
                   component: StokeCity
               },
               {
                   path:'/Sheffield',
                   name: 'SheffieldCity',
                   component: SheffieldCity
               },
               {
                   path:'/Stevenage',
                   name: 'StevenageCity',
                   component: StevenageCity
               },
               {
                   path:'/Swindon',
                   name: 'SwindonCity',
                   component: SwindonCity
               },
               {
                   path:'/Sunderland',
                   name: 'SunderlandCity',
                   component: SunderlandCity
               },
               {
                   path:'/Slough',
                   name: 'SloughCity',
                   component: SloughCity
               },
               {
                   path:'/Stockport',
                   name: 'StockportCity',
                   component: StockportCity
               },
               {
                   path:'/StAlbans',
                   name: 'StAlbansCity',
                   component: StAlbansCity
               },
               {
                   path:'/Twickenham',
                   name: 'TwickenhamCity',
                   component: TwickenhamCity
               },
               {
                   path:'/Uxbridge',
                   name: 'UxbridgeCity',
                   component: UxbridgeCity
               },
               {
                   path:'/Wigan',
                   name: 'WiganCity',
                   component: WiganCity
               },
               {
                   path:'/Warrington',
                   name: 'WarringtonCity',
                   component: WarringtonCity
               },
               {
                   path:'/Wolverhampton',
                   name: 'WolverhamptonCity',
                   component: WolverhamptonCity
               },
               {
                   path:'/Wakefield',
                   name: 'WakefieldCity',
                   component: WakefieldCity
               },
               {
                   path:'/Watford',
                   name: 'WatfordCity',
                   component: WatfordCity
               }
           ]
       }
   ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});