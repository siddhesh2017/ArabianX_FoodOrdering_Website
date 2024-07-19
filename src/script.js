import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Error from './components/Error';
import Contactus from './components/Contactus';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import ShimmerUI from './components/ShimmerUI.jsx'; //Here when we just import using path './components/ShimmerUI' then it try to import both .jsx and .css of ShimmerUI but we have already imported .css file in the .jsx file so we dont need to import both and we have to specify .jsx in the path like './components/ShimmerUI.jsx'.
// import RestMenu from './components/RestMenu';
import {lazy, Suspense} from 'react';
const RestMenu = lazy(()=> import('./components/RestMenu'));


const Applayout = () => {
    return (
        <>
            <div id='main'>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Applayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/aboutus',  // "/aboutus" lihila tr http://localhost:1234/aboutus yeil
                element: <Aboutus/>
            },
            {
                path: 'contactus',  // nusta "contactus" lihila tr http://localhost:1234/parentPath/contactus asa yeil
                element: <Contactus/>
            },
            {
                path: '/restaurantmenu/:id',
                element: <Suspense fallback={<ShimmerUI/>}>
                    <RestMenu/>
                </Suspense>
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

//1:16:28 - 10