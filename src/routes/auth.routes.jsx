// ROTAS DE AUTENTICAÇÃO LOGIN E CADASTRO/

import { Routes, Route } from 'react-router-dom'

//importar as pages
import { Login } from '../pages/login'
import { Cadastro } from '../pages/cadastro'
export function AuthRoutes() {
    return (
        //exemplos de Route
        //<Route path='/exemple1' element={<App />} />
        //<Route path='/exempla2' element={<App/>}/>
        <Routes> 
            <Route path='/' element={<Login />} />
            
            <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
    )
};