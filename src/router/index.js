import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Dashboard from '@/components/Dashboard.vue';
import ProjectPage from '@/components/ProjectPage.vue';
import KanbanBoard from '@/components/KanbanBoard.vue';
import TaskDetail from '@/components/TaskDetail.vue';
import CreateTask from '@/components/CreateTask.vue';
import EditTask from '@/components/EditTask.vue';
import Profile from '@/components/Profile.vue';
import Settings from '@/components/Settings.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/project/:id', name: 'Project', component: ProjectPage },
  { path: '/kanban/:id', name: 'Kanban', component: KanbanBoard },
  { path: '/task/:id', name: 'TaskDetail', component: TaskDetail },
  { path: '/task/create', name: 'CreateTask', component: CreateTask },
  { path: '/task/edit/:id', name: 'EditTask', component: EditTask },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/settings', name: 'Settings', component: Settings }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
