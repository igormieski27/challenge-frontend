import { createRouter, createWebHistory } from "vue-router";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import MainView from "./views/crud/MainView";
import StudentList from "./views/crud/student/StudentList";
import StudentCreate from "./views/crud/student/StudentCreate";

const routeInfos = [
  {
    path: "/",
    component: LoginView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
  {
    path: "/main",
    component: MainView,
  },
  {
    path: "/student-list",
    name: "StudentList",
    component: StudentList,
  },
  {
    path: "/student-create",
    name: "StudentCreate",
    component: StudentCreate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
});

export default router;
