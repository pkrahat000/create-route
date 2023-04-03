import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Manu from './component/manu/Manu'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Contract from './component/contract/Contract';
import Header from './header/Header';
import Home from './component/Home/Home'
import Friends from './component/friends/Friends';
import FriendDetails from './component/friendDetails/FriendDetails';
import Posts from './component/posts/Posts';
import PostBody from './component/postBody/PostBody';
import Main from './component-practice/main/Main';
/* 
1. componenet make
2. route set
3. link 
*/



const router = createBrowserRouter([
  {
  path : '/',
  element : <Header/>,
  children: [
    {
      path : '/Manu',
      element : <Manu/>,
    },
    {
      path :'Friends',
      element : <Friends></Friends>,
      loader: () => fetch('https://jsonplaceholder.typicode.com/users')
    },
    {
      // path :'Friend/1',            static way
      path :'Friend/:FriendId',       //Friend are pore / diye valid value dilei kaj kore
      element: <FriendDetails></FriendDetails>,
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.FriendId}`)
    },
    {
      path : 'Posts',
      element : <Posts></Posts>,
      loader : () => fetch('https://jsonplaceholder.typicode.com/posts')
    },
    {
      path: 'Post/:PostId',
      element : <PostBody></PostBody>,
      loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`)
    },
    {
      path : '/Contract',
      element : <Contract/>,
    },
    {
      path : '/Home',
      element : <Home/>,
    },
    {
      path:'*',
      element: <h1>4o4 Not Found</h1>
    },
  ]
},

])

//* practice 1
/* const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home></Home>
  },
  {
    path: "/Manu",
    element: <Manu/>,
  },
  {
    path: "/Contract",
    element: <Contract></Contract>,
  },
]); */

//* practice 2
//  const RouterEdit = createBrowserRouter([
//   {
//     path:'/',
//     element: <Main></Main>,
//     /* //! Problems ??
//      <h2>This is menu</h2> tag a outlet kivabe set korbo ??
//     */
//     children: [
//       {
//         path :'/Menu',
//         element : <h4>Menu Section</h4>
//       },
//       {
//         path :'/Blogs',
//         element : <h4>Blogs Section</h4>
//       }
//     ]
//   }
//  ]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
