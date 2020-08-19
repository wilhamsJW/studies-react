import React from 'react'
import Main from '../templates/Main'

export default props =>
    <Main icon="home" title="Início&nbsp;" subtitle="Projeto cadastro de usuários." > {/*icon="home" = nome do ícone do awesome, coloca o nome do ícone aqui para passar como parametro pelo props.icon para o componente desejado  */}
        <div className="display-4">Bem Vindo!</div>
        <hr></hr>
        <p className="mb-0">Sistema pra exemplificar a construção de um cadastro desenvolvido em React</p>
    </Main>