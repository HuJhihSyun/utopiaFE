// 官方元件
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld';
import dashboard from '@/components/dashboard'
import Login from '@/components/pages/login'
import products from '@/components/pages/products'
import customerOrder from '@/components/pages/customerOrders'
import customerCheckout from '@/components/pages/customerCheckout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', // 不存在的頁面
      redirect: 'login' // 導向至登入頁
    },
    // {
    //     name:'HelloWorld',
    //     path:'/',
    //     component:HelloWorld,
    //     meta: {requiresAuth:true}
    // },
    {
      name: 'Login', // 元件呈現的名稱
      path: '/login', // 對應的虛擬路徑
      component: Login // 對應的元件
    },
    {
      name: 'dashboard', // 元件呈現的名稱
      path: '/admin', // 對應的虛擬路徑
      component: dashboard, // 對應的元件
      children: [
        {
          path: 'products',
          name: 'products',
          component: products,
          meta: {requiresAuth: true} // 是否需經過驗證
        }
      ]
    },
    {
      name: 'dashboard', // 元件呈現的名稱
      path: '/', // 對應的虛擬路徑
      component: dashboard, // 對應的元件
      children: [
        {
          path: 'customer_order',
          name: 'customerOrder',
          component: customerOrder
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'customerCheckout',
          component: customerCheckout
        }
      ]
    }
  ]
})
