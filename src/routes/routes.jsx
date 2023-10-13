import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Categories from "../components/Categories";

export const router = createBrowserRouter([
    {
        path: '/help-center/',
        element: <App />
    },
    {
        path: '/help-center/categorias',
        element: <h1>pagina de categorias</h1>
    }
]);