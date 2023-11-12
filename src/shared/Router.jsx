import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage'
import MinihompyPage from '../pages/MinihompyPage'
import SignIn from '../components/main/SignIn'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<MainPage />} />
                <Route path="/minihompy/:userId" element = {<MinihompyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;