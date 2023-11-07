import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from '../pages/LoginPage'
import MinihompyPage from '../pages/MinihompyPage'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LoginPage />} />
                <Route path="/minihompy/*" element = {<MinihompyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;