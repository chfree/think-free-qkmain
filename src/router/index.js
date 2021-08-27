import Router from 'vue-router'
export default new Router({
    mode:'history',
    base:'',
    routes: [
      { path: '/', redirect: '/father'},
      { path: '/father', component: () => import('@/components/father') },
      {
        name: 'system1',
        path: '/system/*',
        component: () => import('@/components/system/layout')
      },
      {
        name: 'system',
        path: '/system',
        component: () => import('@/components/system/layout'),
        children: [
          {
            name: 'personIndex',
            path: 'person',
            component: () => import('@/components/system/person'),
          },
          {
            name: 'personIndex1',
            path: 'person1',
            component: () => import('@/components/system/person/index1'),
          }]
      }
    ]
})