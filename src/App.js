import logo from './logo.svg';
import Head from './Components/Head';
import Body from './Components/Body';
import "./index.css"
import { Provider } from 'react-redux';
import store from "./utils/store"
import { BrowserRouter as Router, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import SearchVideo from './Components/SearchVideo';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  // const navigate = useNavigate()
  // const appRouter = createBrowserRouter([{
  //   path: "/",
  //   element: <Body />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <MainContainer />
  //     },
  //     {
  //       path: "/watch",
  //       element: <WatchPage />
  //     },

  //   ]

  // },
  // {
  //   path: "/results",
  //   element: <SearchVideo />,

  // }
  // ])

  return (
    <>

      {/* 
      <Provider store={store}>
        <div>
          <Head />
          <RouterProvider router={appRouter} />

        </div>
      </Provider> */}
      <Provider store={store}>

        <Router>
          <Head />
          <Routes>
            <Route path='/' element={<Body />}>
              <Route path='/' element={<MainContainer />} />
              <Route path='/watch' element={<WatchPage />} />
            </Route>
            <Route path='/results' element={<SearchVideo />} />
          </Routes>
        </Router>
      </Provider>

    </>
  );

}

export default App;
