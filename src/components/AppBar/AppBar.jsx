import { Link } from 'react-router-dom';
import { useState } from 'react';
import { InfoModal } from 'components/InfoModal/InfoModal';
// import logo from '../../images/logo.svg';
// import logoutSvg from '../../images/logout.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/Auth/authOperations';
import {
  Header,
  UserInfo,
  LogoutBtn,
  UserIcon,
  UserText,
  LogoutBtnText,
  UserTextWrap,
} from './AppBar.styled';
import { getEmail } from 'redux/Auth/authSelectors';
// import { useMediaRules } from '../../MediaRules/MediaRules';

export const AppBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const userMail = useSelector(getEmail);
  // Handle update users balance
  const handleClick = () => {
    dispatch(logout());
  };
  // Open modal window
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  // Close modal window
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header>
        <Link to="/">
          <LogoutBtnText>Main</LogoutBtnText>
        </Link>
        <Link to="/products">
          <LogoutBtnText>Products</LogoutBtnText>
        </Link>
        {userMail && (
          <UserInfo>
            <UserIcon>{userMail[0].toUpperCase()}</UserIcon>
            <UserTextWrap>
              <UserText>
                {userMail.split('').slice(0, userMail.indexOf('@')).join('')}
              </UserText>
            </UserTextWrap>
            <LogoutBtn type="button" onClick={handleModalOpen}>
              <LogoutBtnText>Exit</LogoutBtnText>
            </LogoutBtn>
          </UserInfo>
        )}
        {!userMail && (
          <Link to="/register">
            <LogoutBtnText>Login</LogoutBtnText>
          </Link>
        )}
      </Header>
      {modalOpen && (
        <InfoModal closeModal={handleModalClose} dispatch={handleClick}>
          Do you really want to leave?
        </InfoModal>
      )}
    </>
  );
};
