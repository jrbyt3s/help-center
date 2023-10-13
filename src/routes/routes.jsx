import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },
    {
        path:'/category',
        element: <h1>Categoría</h1>
    },
]);