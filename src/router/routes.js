import { lazyLoadView } from "../utils/index"

export const   persistentsNavRoutes = [
    {
      path: '/',
      component: () => lazyLoadView(import('../router/views/Home.vue'))
    }, 
    {
      path: '/courses',
      name: 'Cursos',
      component: () => lazyLoadView(import('./views/courses/AllCourses.vue'))
    },
    {
      path: '/programs',
      name: 'Programas',
      component: () => lazyLoadView(import('./views/programs/AllPrograms.vue'))
    },
    {
      path: '*',
      name: '',
      component: () => lazyLoadView(import('./views/_404.vue'))
    }

  ];

export const   loggedOutNavRoutes = [
    {
      path: '/login',
      name: 'Ingresar',
      component: () => lazyLoadView(import('./views/auth/Login.vue')),
    },
    {
      path: '/register',
      name: 'Registrarse',
      component: () => lazyLoadView(import('./views/auth/Register.vue')),
    }
  ];

export const loggedInNavRoutes = [
    {
      path: '/dashboard',
      name: 'userboard',
      component: () => lazyLoadView(import('./views/dashboard/Dashboard.vue')),
      meta: {
        requiresAuth: true,
        current_user: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => lazyLoadView(import('./views/admin/Main.vue')),
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    }
  ];

