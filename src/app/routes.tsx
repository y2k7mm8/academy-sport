import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Sports } from "./pages/Sports";
import { Achievements } from "./pages/Achievements";
import { News } from "./pages/News";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";
import { DashboardLayout } from "./components/DashboardLayout";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminAthletesTable } from "./pages/AdminAthletesTable";
import { AthletesList } from "./pages/AthletesList";
import { AthleteProfile } from "./pages/AthleteProfile";
import { UserProfile } from "./pages/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "sports", Component: Sports },
      { path: "athletes", Component: AthletesList },
      { path: "athletes/:id", Component: AthleteProfile },
      { path: "achievements", Component: Achievements },
      { path: "news", Component: News },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "athletes", Component: AdminAthletesTable },
    ]
  },
  {
    path: "/profile",
    Component: DashboardLayout,
    children: [
      { index: true, Component: UserProfile },
    ]
  }
]);