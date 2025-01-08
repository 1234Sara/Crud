// import './App.css'
import { useState } from 'react'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Parent from './components/Parent'
import Test from './components/Test'
import Layout from './components/Layout'
import Services from './components/Services'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from './components/NotFound'
import ErrorPage from './components/ErrorPage'
import Web from './components/Web'
import Mobile from './components/Mobile'
import Desktop from './components/Desktop'
import Contact from './components/Contact/Contact'

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Home/>
//   },
//   {
//     path: "about",
//     element: <About/>
//   },
//   {
//     path: "services",
//     element: <Services/>
//   },
//   {
//     path: "products",
//     element: <Parent/>
//   },
//   {
//     path: "contact",
//     element: <Contact/>
//   },  
// ]);

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "services",
          element: <Services/>,
          children: [
            {
            path: "web",
            element: <Web/>
            },
            {
            path: "mobile",
            element: <Mobile/>
            },
            {
            path: "desktop",
            element: <Desktop/>
            }
        ]
        },
        {
          path: "products",
          element: <Parent/>
        },
        {
          path: "contact",
          element: <Contact/>
        },  
        {
          path: "*",
          element: <NotFound/>
        },      
      ]
    }
  ]
)


function App() {

  return <div id='app'>
    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <Test/> */}
    {/* <Services/> */}
    {/* <Home/> */}
    {/* <Home/>
    <Home/> */}
    {/* <About/> */}
    {/* <Contact/> */}
    {/* <Parent/> */}
    <RouterProvider router={router}/>
    </div>
}

export default App


// Create Browser Router

// We have two function we use them like create browser router & create hash router

// Create hash router will take it at the end of project

// Create browser router function takes an array of objects & the properties are two things: path & element.

// Element is the component when you see the path, display the component that you need.

// In the first one, it takes empty path as we don't need to display anything, element can take JSX code.

// It is not obligatory to name the path like the element.

// In return function we don't need to call each component, we will use router provider component to call what inside the create browser router & there is a built-in props called router so, we return the create browser router in a variable called anything then pass it to the router provider router = {}.

// We can write the path without slash.

// The three main are Navbar, Sidebar & Footer so, we make a layout component to put the navbar & footer inside it.

// We make a layout to have these three main components & put layout element with empty path to always display the navbar & footer.

// Layout has property called children & it's like create browser router takes an array of objects.

// When the path is empty, display the layout that has footer & navbar then we put outlet to get all the children, they are the components that we need to display that have paths with all components, so, navbar & footer are always fixed.

// Make index true for home path because we need the default page when open is home page.

// We make index true for the page that we need to be a main page because it's wrong to make footer & navbar as a main page only.

// Also, we make home page to navigate to the home page.

// React make not found page & we handle this page by put * in the path and make a not found page component.

// We make an error page by put the errorElement: <ErrorPage/> after the layout because if there is an error in the code or page, it will go to the error page.
