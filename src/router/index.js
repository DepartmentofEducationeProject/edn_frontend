import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import uptemplate from "../views/admin/uptemplate";
import showlist from "../views/admin/showlist";
import reviewprogress from "../views/admin/reviewprogress";
import reviewresult from "../views/admin/reviewresult";
import showresult from "../views/admin/showresult";
import schoolmanage from "../views/admin/schoolmanage";
import expertmanage from "../views/admin/expertmanage";
import adminmanage from "../views/admin/adminmanage";
import announce from "../views/admin/announce";
import onliner from "../views/admin/onliner";
import systemlog from "../views/admin/systemlog";
import AddFile from "../views/college/AddFile";
import Declaration from "../views/college/Declaration";
import haveReviewList from "../views/expert/haveReviewList";
import notReviewList from "../views/expert/notReviewList";
import reviewPage from "../views/expert/reviewPage";
import expertgroup from "../views/admin/expertgroup";
import expert_transfer from "../views/admin/expert_transfer";
import major_transfer from "../views/admin/major_transfer";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/upload',
        name: 'upload',
        component: uptemplate,
      },
      {
        path: '/showlist',
        name: 'showlist',
        component: showlist,
      },
      {
        path: '/showresult',
        name: 'showresult',
        component: showresult,
      },
      {
        path: '/schoolmanage',
        name: 'schoolmanage',
        component: schoolmanage,
      },
      {
        path: '/expertmanage',
        name: 'expertmanage',
        component: expertmanage,
      },
      {
        path: '/adminmanage',
        name: 'adminmanage',
        component: adminmanage,
      },
      {
        path: '/reviewprogress',
        name: 'reviewprogress',
        component: reviewprogress,
      },
      {
        path: '/reviewresult',
        name: 'reviewresult',
        component: reviewresult,
      },
      {
        path: '/announce',
        name: 'announce',
        component: announce,
      },
      {
        path: '/onliner',
        name: 'onliner',
        component: onliner,
      },
      {
        path: '/systemlog',
        name: 'systemlog',
        component: systemlog,
      },
      {
        path: '/addFile',
        name: 'addFile',
        component: AddFile,
      },
      {
        path: '/declaration',
        name: 'declaration',
        component: Declaration,
      },
      {
        path: '/hasReviewed',
        name: 'haveReviewList',
        component: haveReviewList,
      },
      {
        path: '/notReviewed',
        name: 'notReviewList',
        component: notReviewList,
      },
      {
        path: '/reviewpage',
        name: 'reviewPage',
        component: reviewPage,
      },
      {
        path: '/expertgroup',
        name: 'expertgroup',
        component: expertgroup,
      },
      {
        path: '/expert_transfer',
        name: 'expert_transfer',
        component: expert_transfer,
      },
      {
        path: '/major_transfer',
        name: 'major_transfer',
        component: major_transfer,
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
