import styled from 'styled-components';
import Edit from '../components/edit/edit'

function ProfilePage() {
    return (
        <EditPageLayout>
          <Edit/>
        </EditPageLayout>
    );
}

export default ProfilePage;

const EditPageLayout = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  display: flex;
  justify-content: center;
  align-content: center;
`;