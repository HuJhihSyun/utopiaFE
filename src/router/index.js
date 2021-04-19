// 官方元件
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/pages/login';

Vue.use(Router);

export default new Router({
    routes:[
        {
            name:'HelloWorld', //元件呈現的名稱
            path:'/', //對應的虛擬路徑
            component:HelloWorld //對應的元件
        },
        {
            name:'Login', //元件呈現的名稱
            path:'/login', //對應的虛擬路徑
            component:Login //對應的元件
        }
    ]
});