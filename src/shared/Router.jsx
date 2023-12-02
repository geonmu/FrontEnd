import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import MinihompyPage from '../pages/MinihompyPage';
import SignUpPage from '../pages/SignUpPage';
import EditPage from '../pages/EditPage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/minihompy/:userId' element={<MinihompyPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/edit' element={<EditPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;