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
//       // Remove the token from local storage or session storage
// localStorage.removeItem('token');  // Adjust based on where you store your token
// localStorage.removeItem('usuario');
// // Redirect to login or home page
// this.$router.push('/');  // Adjust the path based on your routing setup
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
