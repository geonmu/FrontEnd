import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProfileImage from '../../images/profile_image.png'


function Profile(props) {
    const SERVER = process.env.REACT_APP_SERVER;

    function ClickSurfing() {
        axios.get(`${SERVER}/api/users/surfing`).then((res) => {
            const random = res.data.data;
            window.location.replace(`/minihompy/${random.userId}`);
        });

        //window.location.replace(`/minihompy/${random}`);
    }

    const genderEmoji = props.user.gender === "남자" ? "♂️" : "♀️";
    const genderEmojiColor = props.user.gender === "남자" ? "var(--blue)" : "var(--pink)";

    return(
        <ProfileBox>
            <section>
                <img className='profileImage' src={ProfileImage} alt='프로필사진' style={{ width: '100%' }}/>
            </section>
            <section>
                <DottedLine />
                <TodayIs>
                    <span className='fontText' style={{ color: 'var(--dark-blue)' }}>TODAY IS...&nbsp;&nbsp;</span><span>{props.user.sixwords}</span>
                </TodayIs>
            </section>
            <section className='bodyText' style={{ display: 'flex', alignItems: 'center' }}>
                <span>{props.user.intro}</span>
            </section>
            <section>
                <History className='fontText'>
                    <span style={{ color: 'var(--dark-blue)' }}>▶</span>History
                </History>
                <div className='bodyText' style={{ marginTop: '5px' }}>
                    <span>{props.user.name}&nbsp;</span>
                    <span style={{ color: genderEmojiColor, fontWeight: 600 }}>{genderEmoji}&nbsp;</span>
                    <span style={{ color: 'var(--light-black)', fontSize: 10 }}>{props.user.birth}</span><br/>
                    <span style={{ color: 'var(--orange)' }}>{props.user.department}&nbsp;</span>
                    <span style={{ color: 'var(--light-orange)', fontSize: 10  }}>{props.user.hb}</span>
                </div>
            </section>
            <section>
                <button onClick={ClickSurfing}style={{ width: '100%', height: '100%' }}>파도타기 🌊</button>
            </section>
        </ProfileBox>
    );
}

export default Profile;

const ProfileBox = styled.div`
    background-color: white;

    border-radius: 12px;
    border: 2px solid var(--dark-gray);
    box-shadow: inset 0 0 0 6px hsl(0, 0%, 90%);

    padding: 25px 29px;

    display: grid;
    grid-template-rows: 155px 45px 95px 70px 40px;
    row-gap: 2px;
`;

const TodayIs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5px;

    height: 30px;
    font-size: 1rem;
    background-color: white;
    border-radius: 6px;
    border: 2px solid var(--gray);
`;

const History = styled.div`
    margin-top: 4px;
    height: 15px;
    border-bottom: 2px dotted var(--dark-gray);
    font-size: 0.8rem;
    font-weight: 600;
`;

const DottedLine = styled.div`
    border: none;
    border-top: 2px dotted var(--dark-gray);
    height: 1px;
`;