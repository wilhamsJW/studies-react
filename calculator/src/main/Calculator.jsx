import React, { Component } from 'react'
import './CalculatorCss.css'

import Display from '../components/Display'
import Button from '../components/Button'

const initialState = {
    displayValue: '9',    //esse valor é o que está sendo mostrado no display da calculadora
    clearDisplay: false, //propriedade p/ limpar o display
    operation: null,    //armazena as operações como: +,-,*,/,=
    values: [0, 0],    //array com 2 valores, serve para armazenar um  valor digitado mais uma operação e mais outro valor dgitado e dá o resultado
    current: 0        //esta var serve pra atualizar o valor do array, ela vai dizer se estou manipulando o valor de índice 0 do arrary ou o valor de ínidice 1
}

export default  class Calculator extends Component {

    //iniciando a const initialState dentro da class Calculator com o operador spread, dessa forma criamos um clone da const initialState dentro de state
    state ={...initialState}

    clearMemory(c) {
        this.setState({...initialState})
        console.log('clear')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n){
        console.log(n)
    }

    constructor(props){
        super(props)
        this.setOperation = this.setOperation.bind(this)//o bind me garante que o this será invocado corretamente
        this.addDigit = this.addDigit.bind(this)
    }
    
    render() {

        return (
            <div className="calculator">
              <Display value={this.state.displayValue} />  
              <Button label="AC"click={c => this.clearMemory()} triple /> {/*invocando a função através de uma arrow function, tbm pode se fazer pelo constructor*/}
              <Button label="/" click={this.setOperation} operation /> {/*invocando a função pelo constructor, o bind garante que o this identifique a função requirida*/}
              <Button label="7" click={this.addDigit} />
              <Button label="8" click={this.addDigit} />
              <Button label="9" click={this.addDigit} />
              <Button label="*" click={this.setOperation} operation />
              <Button label="4" click={this.addDigit} />
              <Button label="5" click={this.addDigit}/>
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