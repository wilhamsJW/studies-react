import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import React from 'react'

import Logo from '../components/templates/Logo'
import Nav from '../components/templates/Nav'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início&nbsp;" subtitle="Projeto cadastro de usuários." /> {/*icon="home" = nome do ícone do awesome, coloca o nome do ícone aqui para passar como parametro pelo props.icon para o componente desejado  */}
        <Footer />
    </div>