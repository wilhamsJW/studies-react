import React, { Component } from 'react'

export default class Saudacao extends Component {


    state = {
        x: "Fala",
        nome: "Júnior"
    }

    //função para alterar o valor do input após o usuário digitar e refletir acima em um título do h1 de forma dinãmica
    setTipo(e) {

        /* Função para mudar o estado e mostrar que o estado é quem dita o valor 
        let i =  1
        setInterval(() => {
            this.setState({x: i++})
        }, 1000) */    

        console.log(e.target.value) //este console mostra o evento onchange sendo capturado a cada clique do usuário, o evento está sendo invocado dentro do input
        this.setState({ x: e.target.value })
    }

    setNome(e) {
        this.setState({nome: e.target.value})
    }

    render() {
        const { x, nome } = this.state
        return (
            <div>
                <h1>{x} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Digite algo..." value={x} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="nome..." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}