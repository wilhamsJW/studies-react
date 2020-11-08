import React from 'react'
import Filho from './Filho'
import { withCloneElement } from './function/functionPai'

/*
export default props => 
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
        <ul> {/*Esses 3 pontinhos é o operador spreed, ele add um array ou var dentro de outro array, sintaxe:3 pontos seguidos do nome do array, ex: ...nomedoarray*}
           /* <Filho nome="01-Yavé" sobrenome={props.sobrenome} />
            <Filho {...props} />
            <Filho {...props}  nome="JESUS"/> {/** ... => é o operador spread 
            {props.children} {/*props.children está aceitando os valores inseridos dentro do elemento pai em index.js, se tivessemos usando uma class teria que usar o {this.props.children
        </ul>
</div>*/


//UTILIZANDO O React.cloneElement - com ela conseguimos clonar o elemento e add mais propriedades ao elemento 
//Aviso: A função React.cloneElement só consegue clona um único elemento, ele não recebe mais de um parãmetro
//para receber mais de um parâmetro temos q chamar a função map() do React.(Abaixo + explicações)
 
export default props => 
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul> 
        {/**clonando o elemento, ...props => add elementos do arquivo Pai nele(adicionou o sobrenome),
         * 
         *  ...props.children.props => garantindo que o elemento filho tenha sua própria propriedade ou seu nome
         * dessa forma, o nome dado no index será add mais o sobrenome do pai. Sem o ...props.children.props iria atribuir apenas o valor
         * do pai, assim é exibido o valor do elemento filho + o o valor do elemento pai 
         * 
         * ...props => é o valor inteiro do elemento pai, mas como tá acompanhado por : ...props.children.props, é só exibido o último valor do pai + o valor do filho
         * 
         * {props.children} => é o elemento filho, lá ele recebe um valor e aqui no index eu exibo ele */}
        {props.children}  
        {React.cloneElement(props.children, {...props, ...props.children.props})}
    </ul>
</div>


//UTILIZANDO A FUNÇÃO MAP() 
/*
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/**React.Children.map = o Children já reconhece que tem um arquivo filho a mais, o map percorre todos os campos ou consegue receber vários parâmetros,
             * props.children = referencia as variáveis do arquivo filho, dessa forma pode se obter as variáveis do arquivo filho
             * child = é apenas o parâmetro da arrow function, poderia ser qq nome
             * ...props = operador spreed está add a var props que vem do elemento filho
             * ...child.props = está garantindo que meus elementos filhos tenham suas próprias propriedades de acordo com o que foi atribuido no index.js
             * nesse caso foi atribuido seus nomes.
             

            {React.Children.map(props.children, child => {
               return React.cloneElement(child, { ...props, ...child.props })
            })}
        </ul>
    </div>*/



//UTILIZANDO A FUNÇÃO MAP() com uma função, caso precise ser invocado em outro lugar do código, 
/*
function withCloneElement (props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props, ...child.props })
     })
}

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
        {withCloneElement(props)}
        </ul>
    </div>*/


//UTILIZANDO A FUNÇÃO MAP() com uma função sendo importada de outra pasta
//isso é útil para um código grande quando tem que se invocar a mesma função várias vezes
/*
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
        {withCloneElement(props)}
        </ul>
    </div> */