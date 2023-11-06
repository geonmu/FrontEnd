import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login'
import Diary from '../pages/Diary'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Login />} />
                <Route path="/diary/*" element = {<Diary />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;