function index() {
  return import(/* webpackChunkName: "index" */ '/src/pages/index.vue')
}
function TambahCounter() {
  return import(
    /* webpackChunkName: "TambahCounter" */ '/src/pages/TambahCounter.vue'
  )
}

export default [
  {
    name: 'index',
    path: '/',
    component: index,
  },
  {
    name: 'TambahCounter',
    path: '/TambahCounter',
    component: TambahCounter,
  },
]
