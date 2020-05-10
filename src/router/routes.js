import { lazyLoadView } from "../utils/index";
export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => lazyLoadView(import('./views/Home.vue'))
  }, 
  {
    path: '/login',
    name: 'login',
    component: () => lazyLoadView(import('./views/auth/Login.vue')),
    meta: {
      guest: true
    }
  }, 
  {
    path: '/register',
    name: 'register',
    component: () => lazyLoadView(import('./views/auth/Register.vue')),
    meta: {
      guest: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => lazyLoadView(import('./views/auth/Logout.vue'))
  },
  {
    path: '/dashboard',
    name: 'userboard',
    component: () => lazyLoadView(import('./views/dashboard/Main.vue')),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => lazyLoadView(import('./views/admin/Main.vue')),
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/courses',
    name: 'courses',
  },
  {
    path: '/programs',
    name: 'programs'
  }
]

