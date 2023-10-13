import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Category from "../components/Category";

export const router = createBrowserRouter([
    {
        path: '/help-center/',
        element: <App />
    },
    {
        path: '/help-center/categorias/:slug',
        element: <Category/>
    }
]);