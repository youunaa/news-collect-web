import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '@/components/layout/Header'
import Left from '@/components/layout/Left'

// 로그인
import Login from '@/views/login/login'

import ContractMain from '@/views/contract/contract-main'

import PlaceMain from '@/views/place/place-main'

Vue.use(VueRouter)

const routes = [
    // 로그인
    {
        path: '/',
        name: 'login2',
        component: Login
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/contract',
        name: 'contractmain',
        components: {
            header: Header,
            left: Left,
            default: ContractMain
        }
    },
    {
        path: '/place',
        name: 'placemain',
        components: {
            header: Header,
            left: Left,
            default: PlaceMain
        }
    },
    //기본 경로
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    next()
        if(to.matched.components!==undefined){
            if(to.matched.some( (item)=> item.components.meta.superAdmin)){
                if(myAuth===authType.SUPERADMIN){
                    next();
                }
                else{
                    alert("권한이 없습니다.");
                    next(-1);
                }
            }
            else{
                next()
            }
        }
        else{
            next()
        }
})


export default router