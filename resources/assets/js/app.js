require('./bootstrap');

window.Vue = require('vue');

window.VueRouter=require('vue-router').default;

window.VueAxios=require('vue-axios').default;

window.Axios=require('axios').default;

let AppLayout= require('./components/App.vue');

// show the list post template
const Listposts=Vue.component('Listposts', require('./components/Listposts.vue'));

// add post template
const Addpost =Vue.component('Addpost', require('./components/Addpost.vue'));

// edite post template
const Editpost =Vue.component('Editpost', require('./components/Editpost.vue'));

// delete post template
const Deletepost =Vue.component('Deletepost', require('./components/Deletepost.vue'));

// view single post template
const Viewpost =Vue.component('Viewpost', require('./components/Viewpost.vue'));

// registering Modules
Vue.use(VueRouter,VueAxios, axios);

const routes = [
    {
        name: 'Listposts',
        path: '/',
        component: Listposts
    },
    {
        name: 'Addpost',
        path: '/add-post',
        component: Addpost
    },
    {
        name: 'Editpost',
        path: '/edit/:id',
        component: Editpost
    },
    {
        name: 'Deletepost',
        path: '/post-delete',
        component: Deletepost
    },
    {
        name: 'Viewpost',
        path: '/view/:id',
        component: Viewpost
    }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(
    Vue.util.extend(
        { router },
        AppLayout
    )
).$mount('#app');