import styled from 'styled-components';
import SignUp from '../components/signup/SignUp';

function SignUpPage() {
    return (
        <SignUpPageLayout>
            <Background>
            <SignUp />
            </Background>
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
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-content: center;

    background-size: 30px 30px;
    background-image:
      linear-gradient(to right, var(--gray) 1px, transparent 1px),
      linear-gradient(to bottom, var(--gray) 1px, transparent 1px);
    background-color: var(--dark-gray);

`;