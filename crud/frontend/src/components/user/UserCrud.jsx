import React, {Component} from 'react'
import Main from 'axios'
import axios from '../templates/Main'

const headerprops = {
    icon: 'users',
    title: 'Usuários',
    Subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {name: '', email: ''},
    list: []
}

export default class UserCrud extends Component {
    state = {...initialState}
    clear() {
        this.setState({user: initialState.user}) //setando user para o estado inicial, dessa forma irá limpar o formulário
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post' //a id sempre vai começar com 0, se dermos um console de !!0 dará false porém qq outro némero será verdadeiro, put é alterar e post e incluir, então se o user não tiver id fará um put se não um post
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user) //estou chamando a var método por [] por ser uma string, porém há uma função dentrod ela, então axios[mthod] se torna uma função, se é um função precisa de parãmetros, q é exatamente oq ue tem dentro dos ()
        .then(resp => {
            const list = this.getUpadatedList(resp.data) //resp.data é o usuário q estou recebendo do meu web service
            this.state({user: initialState.user, list})
        }) 
    }
    
    getUpadatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id) //filter gera outra lista  
        list.unshift(user) //colocando o elemento na primeira posição do array
        return list
    }


    render() {
        return (
            <Main {...headerprops}>
                User Register
            </Main>
        )
    }
}