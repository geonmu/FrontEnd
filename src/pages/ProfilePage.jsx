import styled from 'styled-components';
import Profile from '../components/profile/Profile'

function ProfilePage() {
    return (
        <ProfilePageLayout>
          <Profile/>
        </ProfilePageLayout>
    );
}

export default ProfilePage;

const ProfilePageLayout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  display: flex;
  justify-content: center;
  align-content: center;
`;