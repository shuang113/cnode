import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const ArticleList = r => require.ensure([], () => r(require('components/article-list')), 'list')
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: ArticleList
    }
    // {
    //   path: '/article/:id',
    //   name: 'article',
    //   component: Article
    // },
    // {
    //   path: '/user/:name?',
    //   name: 'user',
    //   component: User
    // }
  ]
})
