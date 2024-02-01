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
import Bulking from "./pages/Bulking.tsx";
import Cutting from "./pages/Cutting.tsx";
import Gymtips from "./pages/gymtips.tsx";
import Article from "./pages/article.tsx";
import HomeWorkout from "./pages/homeworkout.tsx";
import Adminpanel from "./pages/adminpanel.tsx";
import Bulk1 from "./pages/bulk1.tsx";
import Bulk2 from "./pages/bulk2.tsx";
import Bulk3 from "./pages/bulk3.tsx";
import Bulk4 from "./pages/bulk4.tsx";
import Dumbbell from "./pages/dumbbell.tsx";
import Profile from "./pages/profile.tsx";
import Aboutus from "./pages/aboutus.tsx";
import Cut1 from "./pages/cut1.tsx"
import Cut2 from "./pages/cut2.tsx"
import Cut3 from "./pages/cut3.tsx"
import Cut4 from "./pages/cut4.tsx"
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

            path:"/bulk1",
            element:<Bulk1/>
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
        {
            path:"/cut1",
            element:<Cut1/>
        },
        {
            path: "/cut2",
            element: <Cut2/>
        },
        {
            path:"/cut3",
            element:<Cut3/>
        },
        {
            path:"/cut4",
            element:<Cut4/>
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