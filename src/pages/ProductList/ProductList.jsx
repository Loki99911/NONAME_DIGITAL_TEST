import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { StyledHomePage} from './ProductList.styled';
// import { ReactComponent as IconReports } from '../../images/reports.svg';
import { Loader } from 'components/Loader/Loader';
import { setNewDate } from 'redux/Transaction/transactionReducer';

import { useDispatch } from 'react-redux';

export default function ProductList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNewDate(new Date()));
  }, [dispatch]);

  return (
    <>
      <StyledHomePage>
        <div>Products List</div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledHomePage>
    </>
  );
}
