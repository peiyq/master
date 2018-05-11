import Vue from 'vue'
import Router from 'vue-router'
import routes from './pages'

Vue.use(Router)

let mode
if (process.env.NODE_ENV === 'production') {
  mode = 'history'
} else if (process.env.NODE_ENV === 'development') {
  mode = 'hash'
}

export default new Router({
  mode: mode,
  routes
})
