import React, { Component } from 'react'

export default class Saudacao extends Component {


    state = {  //o state poderia ficar aqui mas o ideal é ficar dentro do constructor e temos q inicar ele dentro do constructor
        tipo: "Digite,",
        nome: "Algo inteligente"
    }

    constructor(props) {     //para se trabalhar com o constructor é necessario usar o super e o parãmetro no caso props, sem isso dará erro
        super(props)
        /*this.state = {     //para usar o state aqui dentro temos q usar o this
            tipo: "Fala",
            nome: "Júnior"
        }*/
        this.setTipo = this.setTipo.bind(this)//o bind me garante q o this será enxergado ou invocado, sem o bind gerará um erro
    }



    //função para alterar o valor do input após o usuário digitar e refletir acima em um título do h1 de forma dinãmica
    setTipo(e) {

         // Função para mudar o estado e mostrar que o estado é quem dita o valor 
        /*let i =  1
        setInterval(() => {
            this.setState({tipo: i++})
        }, 1000) */ 

        console.log(e.target.value) //este console mostra o evento onchange sendo capturado a cada clique do usuário, o evento está sendo invocado dentro do input
        this.setState({ tipo: e.target.value })
    }


    setNome(e) {
        this.setState({nome: e.target.value})
    }

    render() {
        const { tipo, nome } = this.state 
        return ( //no primeiro input usei this, pq a função setTipo será invocada pelo constructor com o bind, no 2º input fiz uma arrow function e chamei a função setNome
            <div> 
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="number" placeholder="Digite apenas números..." onChange={ this.setTipo} /> {/*chamando apenas a função, this.setTipo. pq ela está sendo referenciada no construtor*/}
                <input type="text" placeholder="Digite algo..." onChange={e => this.setNome(e)} /> {/**usando arrow fucntion, e não fazendo uso do constructor */}
            </div>
        )
    }
}