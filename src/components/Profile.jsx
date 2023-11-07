import styled from 'styled-components';

function Profile() {
    return(
        <ProfileBox>
            <Today>gd</Today>
            <InnerProfileBox>
                <ProfileImage src = "http://res.heraldm.com/content/image/2021/07/16/20210716000671_0.jpg" />
                <Intro></Intro>
            </InnerProfileBox>
        </ProfileBox>
    );
}

export default Profile;

const ProfileBox = styled.div`
    background-color: #ffffff;

    border-radius: 12px;
    border: 1px solid #374851;

    width: 32%;
    height: 98%;
    margin: 6px 0px 0px 2px;
`;

const Today = styled.div`
    margin: 25px 0px 10px 0px;
    text-align: center;
    font-size: 0.8rem;
`;

const InnerProfileBox = styled.div`
    background-color: #ffffff;

    border-radius: 12px;
    border: 8px solid #ececec;
    box-shadow:
        0 0 0 2px hsl(0, 0%, 70%);

    width: 92%;
    height: 88%;
    margin: 0px auto;
`;


const ProfileImage = styled.img`
    width: 210px;
    height: 140px;

    border-radius: 12px;

    margin: 20px auto 0px auto;
    display: block;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const Intro = styled.div`
    width: 80%;
    height: 30%;

    margin: 25px auto 10px auto;

    border-width: 2px 0px 2px 0px;
    border-color: #d7d7d7;
    border-style: dotted;
`;

const History = styled.div`

`;

const UserName = styled.div`

`;

const UserBirthday = styled.div`

`;

const UserEmail = styled.div`

`;

const Pado = styled.div`

`;