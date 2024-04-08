import { createRouter, createWebHistory } from "vue-router";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import MainView from "./views/crud/MainView";
import StudentList from "./views/crud/student/StudentList";
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
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
});

export default router;
