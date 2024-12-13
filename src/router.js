import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/Home.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectsPage from './components/Projects.vue';
import ContactMe from './components/ContactMe.vue';

const routes = [
  { path: '/', component: HomePage, meta: { title: 'Mihajlo Petrović - Full-Stack Web Developer' } },
  { path: '/about-me', component: AboutMe, meta: { title: 'About Me' }, },
  { path: '/projects', component: ProjectsPage, meta: { title: 'Projects' }, },
  { path: '/contact-me', component: ContactMe, meta: { title: 'Contact Me' }, },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  });

export default router;