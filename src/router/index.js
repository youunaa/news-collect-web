import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '@/components/layout/Header'
import Left from '@/components/layout/Left'

// 로그인
import Login from '@/views/login/login'
// 수집데이터 설정
import CollectSetting from '@/views/collect/collect-setting'
// 수집데이터 결과
import CollectResult from '@/views/collect/collect-result'

Vue.use(VueRouter)

const routes = [
    // 로그인
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/collect/setting',
        name: 'collectSetting',
        components: {
            header: Header,
            left: Left,
            default: CollectSetting
        }
    },
    {
        path: '/collect/result',
        name: 'collectResult',
        components: {
            header: Header,
            left: Left,
            default: CollectResult
        }
    },
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