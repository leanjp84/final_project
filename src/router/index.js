import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Dashboard from "../views/Dashboard.vue";
import Nav from "../components/Nav.vue";
import NewTask from "../components/NewTask.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const routes = [
  {
    path: "/auth",
    component: Auth,
    children: [
      { path: "", component: SignIn },
      { path: "sign-up", component: SignUp },
    ],
  },
  { path: "/", component: Dashboard },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
