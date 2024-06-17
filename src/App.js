import logo from './logo.svg';
import Head from './Components/Head';
import Body from './Components/Body';
import "./index.css"
import { Provider } from 'react-redux';
import store from "./utils/store"
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import SearchVideo from './Components/SearchVideo';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Router } from 'react-router-dom';
function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      }
    ]

  },
  {
    path: "/results",
    element: <SearchVideo />,

  }
  ])

  return (
    <>
      <Provider store={store}>
        <div>

          <Head />
          <RouterProvider router={appRouter}>

            <Body />
            <SearchVideo />

          </RouterProvider>



        </div>
      </Provider>


    </>
  );
}

export default App;
