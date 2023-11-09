import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage'
import MinihompyPage from '../pages/MinihompyPage'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<MainPage />} />
                <Route path="/minihompy/*" element = {<MinihompyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;