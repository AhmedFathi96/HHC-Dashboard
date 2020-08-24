import Admins from "./views/pages/Admins";
import Features from "./views/pages/Features";
import Statistics from "./views/pages/Statistics";
import Contacts from "./views/pages/Contacts";


const routes = [
  {

    icon: "ni ni-single-02 text-primary",
    path: "admins",
    name: "Admins",
    miniName: "D",
    component: Admins,
    layout: "/"
  },
  {

    icon: "ni ni-badge  text-primary",
    path: "features",
    name: "Features",
    miniName: "F",
    component: Features,
    layout: "/"
  },
  {

    icon: "ni ni-chart-bar-32 text-primary",
    path: "statistics",
    name: "Statistics",
    miniName: "F",
    component: Statistics,
    layout: "/"
  },
  {

    icon: "ni ni-email-83 text-primary",
    path: "contacts",
    name: "Contacts",
    miniName: "F",
    component: Contacts,
    layout: "/"
  },
  
];

export default routes;
