import Admins from "./views/pages/Admins";
import Features from "./views/pages/Features";
import Statistics from "./views/pages/Statistics";
import Contacts from "./views/pages/Contacts";
import GalleryImage from "./views/pages/Gallery";
import Slider from "./views/pages/Slider";
import Projects from "./views/pages/Projects";
import Info from "./views/pages/Info";


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
  //Projects

  {

    icon: "ni ni-collection text-primary",
    path: "projects",
    name: "Projects",
    miniName: "F",
    component: Projects,
    layout: "/"
  },
  {

    icon: "ni ni-image text-primary",
    path: "slider",
    name: "Slider",
    miniName: "F",
    component: Slider,
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

    icon: "ni ni-collection text-primary",
    path: "gallery",
    name: "Gallery",
    miniName: "F",
    component: GalleryImage,
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
  {
    icon: "ni ni-settings-gear-65 text-primary",
    path: "info",
    name: "Info",
    miniName: "F",
    component: Info,
    layout: "/"
  },
  
];

export default routes;
