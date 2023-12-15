import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login.tsx";
import Home from "./pages/home.tsx";
import ForgotPass from "./pages/forgotpass.tsx";
import Registration from "./pages/registration.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Review from "./pages/review.tsx";


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
            path:"/home",
            element:<Home/>
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
        }

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