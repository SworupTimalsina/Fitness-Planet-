import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login.tsx";
import ForgotPass from "./pages/forgotpass.tsx";
import Registration from "./pages/registration.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Review from "./pages/review.tsx";
import DescriptionContent from "./pages/DescriptionContent.tsx";
import Nutritionaltips from "./pages/nutritionaltips.tsx";
import Products from "./pages/products.tsx";
import Trainers from "./pages/trainer.tsx";
import GymTip from "./pages/gymtips.tsx";
import Bulking from "./pages/Bulking.tsx";
import Cutting from "./pages/Cutting.tsx";
import Gymtips from "./pages/gymtips.tsx";
import Article from "./pages/article.tsx";
import HomeWorkout from "./pages/homeworkout.tsx";
import Adminpanel from "./pages/adminpanel.tsx";
import Dumbbell from "./pages/dumbbell.tsx";
import Profile from "./pages/profile.tsx";
import Aboutus from "./pages/aboutus.tsx";


const router = createBrowserRouter(
    [
        {
            path:"/",
            element : <Login />
        },
        {
            path:"/login",
            element:<Login/>
        },

        {
            path:"/forgotpass",
            element:<ForgotPass email={""} otp={""} password={""}/>
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
            element:<DescriptionContent productId={7}/>
        },

        {
            path:"/article",
            element:<Article/>
        },
        {
            path:"/Bulking",
            element:<Bulking/>
        },

        {
            path:"/Cutting",
            element:<Cutting/>
        },
        {
            path:"/Nutrition",
            element:<Nutritionaltips/>
        },
        {
            path:"/Trainers",
            element:<Trainers/>
        },
        {
            path:"/GymTips",
            element:<GymTip/>
        },

        {
            path:"/Gymtips",
            element:<Gymtips/>
        },
        {
            path:"/homeworkout",
            element:<HomeWorkout/>
        },
        {
            path:"/admin",
            element:<Adminpanel/>
        },
        {
            path:"/dumbbell",
            element:<Dumbbell/>
        },
        {
            path:"/profile",
            element:<Profile/>
        },
        {
            path:"/aboutus",
            element:<Aboutus/>
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