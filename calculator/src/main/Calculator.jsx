import React, { Component } from 'react'
import './CalculatorCss.css'

import Display from '../components/Display'
import Button from '../components/Button'

const initialState = {
    displayValue: '0',    //esse valor é o que está sendo mostrado no display da calculadora
    clearDisplay: false, //propriedade p/ limpar o display
    operation: null,    //armazena as operações como: +,-,*,/,=
    values: [0, 0],    //array com 2 valores, serve para armazenar um  valor digitado mais uma operação e mais outro valor dgitado e dá o resultado
    current: 0        //esta var serve pra atualizar o valor do array, ela vai dizer se estou manipulando o valor de índice 0 do arrary acima chamado values ou o valor de ínidice 1
}

export default class Calculator extends Component {

    //iniciando a const initialState dentro da class Calculator com o operador spread, dessa forma criamos um clone da const initialState dentro de state
    state = { ...initialState }

    clearMemory(c) {
        //configuta para estado inicial, por isso o display voltará a ser 0
        this.setState({ ...initialState })
        console.log('clear')
    }

    setOperation(operation) {
        console.log(operation)
    }

    // Todos os números digitados pelo usuário entrará aqui
    addDigit(n) {
        //regra criada para impedir que se digite mais de um ponto
        if (n === '.' && this.state.displayValue.includes('.')) {
            return //return para a execução impedindo q a condicional se repita
        }

        //var criada para não permirtir q sejam digitados mais q um 0, sempre q digitarem mais q um 0 irá limpar o display ficando apenas um 0
        //se o número digitado for 0 this.state.displayValue ou seja add ele, : se não limpa ele 
        const clearDisplay = this.state.displayValue === '0' ? this.state.displayValue : this.state.clearDisplay
        //outra maneira de se executar o código acima
        //const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        //se precisar limpar o display o valor será vazio se não o valor continuará o mesmo do display
        //esta linha de código abaixo impede q apareçam mais 0 no display, e está fazendo com que todos os números mostrem no display
        const currentValue = clearDisplay ? '' : this.state.displayValue

        //definindo o valor do display, será definido pelo currentValue + o valor digitado que é n
        const displayValue = currentValue + n

        this.setState({ displayValue, clearDisplay: false })

        //os números entrarão aqui e serão colocados dentro de uma array chamado values, com duas posições
        if (n !== '.') {
            const i = this.state.current                //clonando a var current do initialState, essa var foi criadas apenas para colocar valor na posição, poderia ter colocdo o 0 diretamente no values, seria outra opção
            const newValue = parseFloat(displayValue)  //trasnformando string em número
            const values = [...this.state.values]     //clonando a propriedade values do initialState
            values[i] = newValue                     //values[i] na posição i será igual a newValue, ou seja estou pegando a propriedade de displayValue que está recebendo os números digitados e colocando ela dentro da var value na posição i ou posição 0
                                                    //a value do initState tem duas posições, na primeira posição receberá todos os dados digitados pelo user antes do operador 
            this.setState({ values })              //add o array no state do meu objeto
            console.log(values)                   //no console mostra que está sendo armazenado os valores digitados dentro da primeira posição do array, depois disso o user digita um operador mais outros números, esses outros números terão q ficar dentro da posição 1 do array
        }
    }

    constructor(props) {
        super(props)
        this.setOperation = this.setOperation.bind(this)//o bind me garante que o this será invocado corretamente
        this.addDigit = this.addDigit.bind(this)
    }

    render() {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={c => this.clearMemory()} triple /> {/*invocando a função através de uma arrow function, tbm pode se fazer pelo constructor*/}
                <Button label="/" click={this.setOperation} operation /> {/*invocando a função pelo constructor, o bind garante que o this identifique a função requirida*/}
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />

            </div>
        )
    }
}