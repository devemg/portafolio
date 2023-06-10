import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutMePage } from "../pages/about-me/AboutMePage";
import { ContactPage } from "../pages/contact/ContactPage";
import { ErrorPage } from "../pages/error-page/ErrorPage";
import { ProjectsPage } from "../pages/projects/ProjectsPage";
import { SkillsPage } from "../pages/skills/SkillsPage";
import { PortfolioApp } from "../layout/PortfolioApp/PortfolioApp";
import { ProjectDetailPage } from "../pages/project-detail/ProjectDetailPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AboutMePage />,
      },
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetailPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      }
    ]
  },
]);

export const PortfolioRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
