import { createRouter, createWebHistory } from "vue-router";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import MainView from "./views/crud/MainView";
import StudentList from "./views/crud/student/StudentList";
import StudentCreate from "./views/crud/student/StudentCreate";
import UserService from "./services/UserService";

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
    meta: { requiresAuth: true }, // Define a meta propriedade para indicar que essa rota requer autenticação
  },
  {
    path: "/student-list",
    name: "StudentList",
    component: StudentList,
    meta: { requiresAuth: true }, // Define a meta propriedade para indicar que essa rota requer autenticação
  },
  {
    path: "/student-create",
    name: "StudentCreate",
    component: StudentCreate,
    meta: { requiresAuth: true }, // Define a meta propriedade para indicar que essa rota requer autenticação
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
});

router.beforeEach((to, from, next) => {
  // Verifica se a rota requer autenticação
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Verifica se o usuário está autenticado
    if (!UserService.isLoggedIn()) {
      // Se não estiver autenticado, redireciona para a tela de login
      next("/");
    } else {
      // Se estiver autenticado, permite o acesso à rota
      next();
    }
  } else {
    // Se a rota não requer autenticação, permite o acesso
    next();
  }
});

export default router;
