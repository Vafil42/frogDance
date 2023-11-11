import { AuthPage } from "pages/Auth";
import { CompanyPage } from "pages/CompanyPage";
import { CreateRoutePage } from "pages/RoutesPage/CreateFlowPage";
import { RoutePage } from "pages/RoutesPage";
import { createBrowserRouter } from "react-router-dom";
import { RouteDetailPage } from "pages/RoutesPage/FlowDetailPage"
import { EditRoutePage } from "pages/RoutesPage/FlowDetailPage/EditFlowPage"
import { EditCompanyPage } from "pages/CompanyPage/EditCompanyPage"
import View from "View";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <View />,
        children: [
            {
                path: "company",
                element: <CompanyPage />
            },
            {
                path: "routes",
                element: <RoutePage />
            },
            {
                path: "routes/create",
                element: <CreateRoutePage />
            },
            {
                path: "/routes/:id",
                element: <RouteDetailPage />,
            },
            {
                path: "/routes/:id/edit",
                element: <EditRoutePage />
            },
            {
                path: "/company/edit",
                element: <EditCompanyPage />
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthPage />
    }
]) 