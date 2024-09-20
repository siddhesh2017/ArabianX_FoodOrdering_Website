import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Error from './components/Error';
import InstaMart from './components/InstaMart';
import CartItems from "./components/CartItems";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import ShimmerUI from './components/ShimmerUI'; //Here when we just import using path './components/ShimmerUI' then it try to import both .jsx and .css of ShimmerUI but we have already imported .css file in the .jsx file so we dont need to import both and we have to specify .jsx in the path like './components/ShimmerUI.jsx'.
// import RestMenu from './components/RestMenu';
import {lazy, Suspense} from 'react';
const RestMenu = lazy(()=> import('./components/RestMenu'));
import {Provider} from 'react-redux';
import store from "./utils/redux-store/store";


const Applayout = () => {
    return (
        <>
        {/* here prop name should be strictly "store" */}
            <Provider store={store} >  
                <div id='main'>
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </div>
            </Provider>
        </>
    )
}

const basename = process.env.NODE_ENV === 'production' ? '/ArabianX_FoodOrdering_Website' : '';

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
                path: 'instamart',  // nusta "instamart" lihila tr http://localhost:1234/parentPath/instamart asa yeil
                element: <InstaMart/>
            },
            {
                path: '/restaurantmenu/:id',
                element: <Suspense fallback={<ShimmerUI/>}>
                    <RestMenu/>
                </Suspense>
            },
            {
                path: 'cart',
                element: <CartItems/>
            }
        ]
    },
    
],
{ basename }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

//1:16:28 - 10
// npm install @reduxjs/toolkit => installing redux 
// npm install react-redux => it is bridge between react and redux