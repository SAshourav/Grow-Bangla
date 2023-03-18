import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Account from './Component/Account/Account';
import Home from './Component/Home/Home';
import Landing from './Component/Landing/Landing';
import Login from './Component/Login/Login';
import Main from './layout/Main';
import SignUpC from './Component/SignUpC/SignUpC';
import LoginF from './Component/LoginF/LoginF';
import HomeF from './Component/HomeF/HomeF';
import Farmer from './layout/Farmer';
import OrderF from './Component/OrderF/OrderF';
import AccountF from './Component/AccountF/AccountF';
import LandingPage from './Component/Landing/Landing';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <LandingPage></LandingPage>},
    {
      path: '/' , element: <Main></Main> , children: [
        {path:'/',
          element: <Home></Home>
        },
        {path: '/home', loader: () => fetch('fakeDB.json'), element: <Home></Home>},
        {path: '/account', element: <Account></Account>},
      ]
    },
    {
      path: '/', element: <Farmer></Farmer>, children: [
        {path: '/homeF', element: <HomeF></HomeF>},
        {path: '/orderF', element: <OrderF></OrderF>},
        {path: '/accountF', element: <AccountF></AccountF>}
      ]
    },
    {path: '/landing', element: <Landing></Landing>},
    {path: '/login', element: <Login></Login>},
    {path: '/signupC', element: <SignUpC></SignUpC>},
    {path: '/loginF' , element: <LoginF></LoginF>},
    {path: '/homeF', element: <HomeF></HomeF>},
    {path: '*', element: <div>This Route not found , Error 404</div>}
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
