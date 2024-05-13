import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
 import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
 import About from "./components/About";
 import Contact from "./components/Contact";
import Books from "./components/Books";
import Projects from "./components/Projects";


const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/books",
                element:<Books/>,
            },
            {
                path:"/projects",
                element:<Projects/>,
            }
           
        ],
        errorElement:<Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)