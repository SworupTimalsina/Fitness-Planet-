import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login.tsx";
import ForgotPass from "./pages/forgotpass.tsx";
import Registration from "./pages/registration.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Review from "./pages/review.tsx";
import DescriptionContent from "./pages/DescriptionContent.tsx";
import Products from "./pages/products.tsx";
import BulkCut from "./pages/BulkCut.tsx";
import BulkCut2 from "./pages/BulkCut2.tsx";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element : <Login />
        },
        {
            path:"/login",
            element:<Login />
        },

        {
            path:"/forgotpass",
            element:<ForgotPass/>
        },
        {
            path:"/register",
            element:<Registration/>
        },
        {
            path:"/dashboard",
            element:<Dashboard/>
        },
        {
            path:"/review",
            element:<Review/>
        },

        {
            path:"/products",
            element:<Products/>
        },
        {
            path:"/Description",
            element:<DescriptionContent/>
        },

        {
            path:"/BulkCut",
            element:<BulkCut/>
        },
        {
            path:"/BulkCut2",
            element:<BulkCut2/>
        },


    ]
)
function App() {

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}
export default App