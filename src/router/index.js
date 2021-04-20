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
import addFile from "../components/college/addFile";
import declaration from "../views/college/declaration";
import haveReviewList from "../views/expert/haveReviewList";
import notReviewList from "../views/expert/notReviewList";
import reviewPage from "../views/expert/reviewPage";
import expertgroup from "../views/admin/expertgroup";
import expert_transfer from "../views/admin/expert_transfer";
import major_transfer from "../views/admin/major_transfer";
import reviewProcess from "../views/college/reviewProcess"
import major_review from "../views/school/major_review";
import review_process from "../views/school/review_process";
import review_result from "../views/school/review_result";
import college_user_management from "../views/school/college_user_management";
import userInformation from "../components/common/userInformation";
import showMajor from "../views/admin/showMajor";
import admin_homePage from "../views/admin/admin_homePage";
import school_homePage from "../views/school/school_homePage";
import college_homePage from "../views/college/college_homePage";
import expert_homePage from "../views/expert/expert_homePage";


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
        },
        {
            path: '/showMajor',
            name: 'showMajor',
            component: showMajor,
        },
        //学院用户
        {
            path: '/addFile',
            name: 'addFile',
            component: addFile,
        },
        {
            path: '/declaration',
            name: 'declaration',
            component: declaration,
        },
        {
            path: '/reviewProcess',
            name: 'reviewProcess',
            component: reviewProcess,
        },
        //专家用户
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
        //学校用户
        {
            path: '/majorReview',
            name: 'majorReview',
            component: major_review,
        },
        {
            path: '/reviewListProcess',
            name: 'reviewListProcess',
            component: review_process,
        },
        {
            path: '/reviewListResult',
            name: 'reviewListResult',
            component: review_result,
        },
        {
            path: '/collegeUserManagement',
            name: 'collegeUserManagement',
            component: college_user_management,
        },
        //公共信息
        {
            path: "/userInformation",
            name: "userInformation",
            component: userInformation,
        },
        //用户主页
        {
            path: "/adminHomePage",
            name: "adminHomePage",
            component: admin_homePage,
        },
        {
            path: "/schoolHomePage",
            name: "schoolHomePage",
            component: school_homePage,
        },
        {
            path: "/collegeHomePage",
            name: "collegeHomePage",
            component: college_homePage,
        },
        {
            path: "/expertHomePage",
            name: "expertHomePage",
            component: expert_homePage,
        }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
