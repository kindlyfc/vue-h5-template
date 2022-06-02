const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('/@/views/Home/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
]

export default routes
