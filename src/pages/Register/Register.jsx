
import LoginForm from '../../components/LoginForm/LoginForm';
import { RegisterLayout} from './Register.styled';
// import { useMediaRules } from '../../MediaRules/MediaRules';

export default function Register() {
  // const { isMobile, isDesktop, isTablet } = useMediaRules();
  return (

      <RegisterLayout>
        <LoginForm />
      </RegisterLayout>
 
  );
}
