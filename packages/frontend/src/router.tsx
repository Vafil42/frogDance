import { AuthPage } from "pages/Auth";
import { CompanyPage } from "pages/CompanyPage";
import { RoutePage } from "pages/RoutesPage";
import { createBrowserRouter } from "react-router-dom";
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
                path: "routs",
                element: <RoutePage/>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthPage />
    }
]) 