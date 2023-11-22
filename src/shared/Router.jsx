import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import MinihompyPage from '../pages/MinihompyPage';
import SignUpPage from '../pages/SignUpPage';
import AuthPage from '../pages/AuthPage';
import ProfilePage from '../pages/ProfilePage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/minihompy/:userId' element={<MinihompyPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/signup/auth' element={<AuthPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;