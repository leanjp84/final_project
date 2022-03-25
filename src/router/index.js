import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Dashboard from "../views/Dashboard.vue";
import Nav from "../components/Nav.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";

const routes = [
  {
    path: "/auth",
    component: Auth,
    children: [
      { path: "", component: SignIn },
      { path: "sign-up", component: SignUp },
    ],
  },
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/new-task",
    name: "newTask",
    component: NewTask,
  },
  {
    path: "/task-item",
    name: "TaskItem",
    component: TaskItem,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
