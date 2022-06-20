import { Routes, Route } from 'react-router-dom'

//importar as pages
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';

export function AppRoutes() {
    return (
        //exemplos de Route
        //<Route path='/exemple1' element={<App />} />
        //<Route path='/exempla2' element={<App/>}/>
        <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    )
};