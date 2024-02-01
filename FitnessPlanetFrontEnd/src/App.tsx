import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login.tsx";
import ForgotPass from "./pages/forgotpass.tsx";
import Registration from "./pages/registration.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Review from "./pages/review.tsx";
// import DescriptionContent from "./pages/DescriptionContent.tsx";
import Nutritionaltips from "./pages/nutritionaltips.tsx";
import Products from "./pages/products.tsx";
import Trainers from "./pages/trainer.tsx";
import GymTip from "./pages/gymtips.tsx";
import BulkCut from "./pages/BulkCut.tsx";
import BulkCut2 from "./pages/BulkCut2.tsx";
// import Dumbbell from "./pages/dumbbell.tsx";
import Gymtips from "./pages/gymtips.tsx";
import Article from "./pages/article.tsx";
import HomeWorkout from "./pages/homeworkout.tsx";
import Adminpanel from "./pages/adminpanel.tsx";
import Bulk from "./pages/bulk.tsx";
import Bulk2 from "./pages/bulk2.tsx";
import Bulk3 from "./pages/bulk3.tsx";
import Bulk4 from "./pages/bulk4.tsx";
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
            element:<ForgotPass email='' otp='' password=''/>
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
        // {
        //     path:"/Description",
        //     element:<DescriptionContent/>
        // },

        {
            path:"/article",
            element:<Article/>
        },
        {
            path:"/BulkCut",
            element:<BulkCut/>
        },

        {
            path:"/BulkCut2",
            element:<BulkCut2/>
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

            path:"/bulk",
            element:<Bulk/>
},

{
    path:"/bulk2",
        element:<Bulk2/>
},

{
    path:"/bulk3",
        element:<Bulk3/>
},

        {
            path: "/bulk4",
            element: <Bulk4/>
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