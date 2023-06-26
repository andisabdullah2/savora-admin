/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 

*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Resep from "layouts/resep";
import AddResep from "layouts/resep/addresep";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
// import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Kategori",
    key: "kategori",
    icon: <Icon fontSize="small">category</Icon>,
    route: "/kategori",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Bahan-Makanan",
    key: "bahan-makanan",
    icon: <Icon fontSize="small">kitchen</Icon>,
    route: "/bahan",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Resep",
    key: "resep",
    icon: <Icon fontSize="small">fastfood</Icon>,
    route: "/resep",
    component: <Resep />,
  },
  {
    type: "collapse",
    name: "Tips",
    key: "tips",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/tips",
    component: <Tables />,
  },
  {
    name: "Tambah Resep",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/tambahResep",
    component: <AddResep />,
  },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  {
    type: "collapse",
    name: "User",
    key: "user",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Setting",
    key: "setting",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "/setting",
    component: <Profile />,
  },
  {
    // type: "collapse",
    // name: "Sign In",
    // key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    // type: "collapse",
    // name: "Sign Up",
    // key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
