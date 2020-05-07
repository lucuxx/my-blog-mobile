import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'allarticle',
        name: 'AllArticle',
        component: () =>
          import(
            /* webpackChunkName: "AllArticle" */ '../views/AllArticle.vue'
          ),
      },
      {
        path: 'classarticle',
        name: 'ClassArticle',
        component: () =>
          import(
            /* webpackChunkName: "ClassArticle" */ '../views/ClassArticle.vue'
          ),
        // children: [
        //   {
        //     path: 'test',
        //     name: 'Test',
        //     component: () =>
        //       import(/* webpackChunkName: "test" */ '@/components/test.vue'),
        //   },
        // ],
      },
      {
        path: 'message',
        name: 'Message',
        component: () =>
          import(/* webpackChunkName: "Message" */ '../views/Message.vue'),
      },
      {
        path: 'seting',
        name: 'Seting',
        component: () =>
          import(/* webpackChunkName: "Seting" */ '../views/Seting.vue'),
      },
    ],
  },
  {
    path: '/details',
    name: 'Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Details" */ '../views/ArticleDetails.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
