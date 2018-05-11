const routes = [
  {
    path: '/',
    component: resolve => {
      require(['../pages/HelloWorld'], resolve)
    }
  }
]
export default routes
