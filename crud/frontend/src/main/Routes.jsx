import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default  props => 
    <Switch> 
        <Route exact path='/' component={Home} />     {/**exact = faz com que o redirecionamento ocorra exatamente para o  barra (/), se for barra alguma coisa não iá para a rota requerida */}
        <Route path='/users' component={UserCrud} />  {/**não foi usado exact = dessa forma qq coisa que tiver além do solicitado. ex.: /usersxx irá ir para o /users */}
        <Redirect from='*' to='/' />                  {/**qq url digitda será redirecionada para o / que é o Home */}
    </Switch>