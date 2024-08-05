import Check from "@/module/Admin/Check/screens/Check";
import Checkout from "@/module/checkout/screen/Checkout";
import Doctors from "@/module/doctor/Doctors";
import ErrorPath from "@/module/error/error";
import { Home } from "@/module/home";
import { Login } from "@/module/login";
import MyBooking from "@/module/myBooking/screens/MyBooking";
import ServiceInfo from "@/module/services/ServiceInfo";
import Services from "@/module/services/Services";
export const routes = [
  { path: "/", component: Home, layout: true, public: true },
  { path: "/home", component: Home, layout: true, public: true },
  { path: "/mybooking", component: MyBooking, layout: true, public: true },
  { path: "/services/:id", component: Services, layout: true, public: true },
  {
    path: "/services/:id/:idd",
    component: ServiceInfo,
    layout: true,
    public: true,
  },
  { path: "/doctor/:id", component: Doctors, layout: true, public: true },
  { path: "/login", component: Login, public: true, token_render: true },
  { path: "/checkout", component: Checkout, layout: true, public: true },
  {
    path: "/admin/check",
    component: Check,
    adminlayout: true,
    isAdmin: true,
    public: true,
  },
];
export const errorPage = { path: "*", component: ErrorPath };
export const accessDeniedPage = { path: "*", component: ErrorPath };
