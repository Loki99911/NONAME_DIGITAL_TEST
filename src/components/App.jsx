import React, { useEffect} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy } from 'react';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { PublicRoute} from '../service/routes';
import { getIsUserFetching } from 'redux/Auth/authSelectors';
import { MainLoader } from './MainLoader/MainLoader';
import Main from 'pages/Main/Main';

const Register = lazy(() => import('../pages/Register/Register'));
const ProductList = lazy(() => import('../pages/ProductList/ProductList'));

export const App = () => {
  const isUserFetching = useSelector(getIsUserFetching);
  useEffect(() => {
  }, []);

 
  
  return isUserFetching ? (
    <MainLoader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute restricted>
              <Main />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PublicRoute restricted>
              <ProductList />
            </PublicRoute>
          }
        >
          {/* <Route index element={<Navigate to="/main/expenses" />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/register" />} />
      </Route>
    </Routes>
  );
};
