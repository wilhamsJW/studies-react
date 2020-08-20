import React, {Component} from 'react'
import Main from '../templates/Main'

const headerprops = {
    icon: 'users',
    title: 'Usuários',
    Subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerprops}>
                User Register
            </Main>
        )
    }
}