import VueRouter from "vue-router";
import routes from "./routes";
import { jwtDecode } from 'jwt-decode';

function isTokenExpired(token) {
  if (!token) return true;
  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000; // current time in seconds
  return decoded.exp < currentTime;
}

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});



// router.beforeEach((to, from, next) => {
//   console.log('Navigation Guard: Checking from', from.path, 'to', to.path);

//   const token = localStorage.getItem('token');
//   const isAuthenticated = token && !isTokenExpired(token);
  
//   console.log('Token:', token);
//   console.log('Is token expired:', isTokenExpired(token));
//   console.log('Is authenticated:', isAuthenticated);

//   // Prevent redundant navigation to the same route
//   if (from.fullPath === to.fullPath) {
//     console.log('Navigation Guard: Redundant navigation detected. Aborting navigation to same path.');
//     return next(false); // Abort the navigation
//   }

//   // Handle public routes that do not require authentication
//   if (!to.matched.some(record => record.meta.requiresAuth)) {
//     console.log('Navigation Guard: Accessing a public route:', to.path);
//     next(); // Always allow access to public routes
//   } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
//     // If the route requires authentication and the user is not authenticated
//     console.log('Navigation Guard: Not authenticated and trying to access a protected route. Redirecting to login.');
//     next({ name: 'login' });
//   } else if (to.name === 'login' && isAuthenticated) {
//     // If the user is already authenticated and tries to go to the login page
//     console.log('Navigation Guard: Already authenticated but trying to access login. Redirecting to dashboard.');
//     next({ name: 'dashboard' }); // Redirect to dashboard
//   } else {
//     // Proceed to the route if no special conditions were met
//     console.log('Navigation Guard: Access granted to', to.path);
//     next();
//   }
// });


router.beforeEach((to, from, next) => {
  console.log('Navigating from:', from.path, 'to:', to.path); // Muestra de dónde viene y a dónde va
  console.log('Full route details to:', to); // Detalles completos de la ruta de destino
  

  const token = localStorage.getItem('token');
  console.log('token:', token ); // Muestra el estado de la autenticación

  console.log('Is expired:', isTokenExpired(token)); // Muestra el estado de la autenticación
  const isAuthenticated = token && !isTokenExpired(token);
  console.log('Is authenticated:', isAuthenticated); // Muestra el estado de la autenticación

  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('This route requires auth'); // Indica si la ruta requiere autenticación
    if (!isAuthenticated) {
      console.log('Not authenticated, redirecting to login'); // No autenticado, redirigir a login
      next({ name: 'login' });
    } else {
      console.log('Authenticated, proceeding'); // Autenticado, continuar
      next();
    }
  } else if (to.name === 'login' && isAuthenticated) {
    console.log('Already authenticated, redirecting to dashboard'); // Ya autenticado, redirigir a dashboard
    next({ name: 'dashboard' });
  } else {
    console.log('No special auth rules, proceeding'); // No hay reglas especiales de autenticación, continuar
    next();
  }
});

export default router;
