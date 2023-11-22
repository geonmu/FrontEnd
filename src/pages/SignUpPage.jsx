import styled from 'styled-components';
import SignUp from '../components/signup/SignUp';

function SignUpPage() {
    return (
        <SignUpPageLayout>
            <SignUp />
        </SignUpPageLayout>
    );
}

export default SignUpPage;

const SignUpPageLayout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  display: flex;
  justify-content: center;
  align-content: center;
`;