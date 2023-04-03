import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Manu from './component/manu/Manu'
import {
  createBrowserRouter,
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

/* 
1. componenet make
2. route set
3. link 
*/
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
      element: <div>4o4 Not Found</div>
    },
  ]
},

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
