import styled from 'styled-components';
import Auth from '../components/signup/Auth';

function AuthPage() {
    return (
        <AuthPageLayout>
            <Auth />
        </AuthPageLayout>
    );
}

export default AuthPage;

const AuthPageLayout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  display: flex;
  justify-content: center;
  align-content: center;
`;