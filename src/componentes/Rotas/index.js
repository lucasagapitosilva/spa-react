import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PaginaHome from '../Paginas/PaginaHome/'
import PaginaSabores from '../Paginas/PaginaSabores/'
import PaginaSobre from '../Paginas/PaginaSobre/'

const Rotas = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaHome/>}/>
            <Route path='/sabores' element={<PaginaSabores/>}/>
            <Route path='/sobre' element={<PaginaSobre/>}/>
        </Routes>
    </BrowserRouter>

)

export default Rotas;