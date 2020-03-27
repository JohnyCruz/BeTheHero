import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
export default function Routes(){
    return (
        <BrowserRouter>
         <Switch>
             {/* Aqui eu preciso colocar o exact, por que esse switch nao verifica o conteudo inteiro, ele verifica só se o começo é igual */}
             <Route path='/' exact component={Logon}/> 
             <Route path='/Register' component={Register}/>
         </Switch>
        </BrowserRouter>
    )
}