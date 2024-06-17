import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Write from "./pages/Write";
import Posts from "./pages/Posts";
 import { loader as postsLoader } from "./pages/Posts";
import Detail from "./pages/Detail";
import { loader as deatilLoader } from "./pages/Detail";
import { action as writeAction } from "./components/PostForm";
import Category ,{loader as categoryLoader} from "./components/Category";
import Author, { loader as authorLoader } from "./components/Author";
// import Recent, {loader as recentLoader} from "./components/Recent";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path:"/write",
          element:<Write/>,
          action:writeAction,
        },
        {
          path:"/post",
          element:<Posts/>,
          loader:postsLoader,
        },
        {
          path:"/post-detail/:id",
          element:<Detail/>,
          loader:deatilLoader,
        },
        // {
        //   path:"/recent",
        //   element:<Recent/>,
        //   loader: recentLoader,
        // },
        {
          path:"/post-categories/:type",
          element:<Category/>,
          loader:categoryLoader,
        },
        {
          path:"/post-authors/:author",
          element:<Author/>,
          loader:authorLoader,
        },
        
        
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
