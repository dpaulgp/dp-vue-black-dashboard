// Importaciones de componentes estáticos
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import NotFound from "@/pages/NotFoundPage.vue";
import Login from "@/pages/Login.vue";

// Carga diferida para componentes de la sección admin
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ "@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */ "@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
// const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
// const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");
const TurnoList = () => import(/* webpackChunkName: "common" */ "@/pages/TurnoList.vue");
const EditTurno = () => import(/* webpackChunkName: "common" */ "@/pages/EditTurno.vue");

// Definición de rutas
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      { path: "", name: "dashboard", component: Dashboard },
      { path: 
        "profile", 
        name: "profile", 
        component: Profile 
      },
      { path: "notifications", name: "notifications", component: Notifications },
      { path: "icons", name: "icons", component: Icons },
      // { path: "maps", name: "maps", component: Maps },
      { path: "typography", name: "typography", component: Typography },
      // { path: "table-list", name: "table-list", component: TableList },
      { path: "turno-list", name: "turno-list", component: TurnoList },
      { path: "/edit-turno/:id?", name: "editTurno", component: EditTurno },

      //       { 
      //   path: "turno-list",
      //   name: "turno-list",
      //   component: TurnoList,
      //   children: [
      //     // EditTurno as a child route
      //     { path: "edit-turno/:id?", name: "editTurno", component: EditTurno }
      //   ]
      // },
    ],
  },
  
  { path: "*", component: NotFound },
];






/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
