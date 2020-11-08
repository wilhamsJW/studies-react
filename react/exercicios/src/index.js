import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'                             //importação do arquivo Primeiro
//import BomDia from './componentes/BomDia'
//import {BoaTarde, BoaNoite} from './componentes/Multiplos_parameter'    //usando múltiplos parametros sem default
//import x from './componentes/Multiplos_parameter'                      //usando múltiplos parametros com default,a function foi exportada do arquivo como default, então posso atribuir um nome qq,  como no exemplo está x e dentro da div chamar x.nomedoarquivo
//import Saudacao from './componentes/Saudacao'                           //importando uma class (código mais abaixo)
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


/*ReactDOM.render(<Primeiro />, document.getElementById('root'))*/

//ReactDOM.render(<BomDia x="Wilhams" idade="25"/>, document.getElementById('root'))

//usando múltiplos parametros sem default
/*
ReactDOM.render(
    <div> 
        <BoaTarde nome="Wilhams"/>
        <BoaNoite nome="Júnior"/>
    </div>, document.getElementById('root'))
*/




//usando múltiplos parametros com default
/*
ReactDOM.render(
<div>
    <x.BoaTarde nome="Wilhams"/>
    <x.BoaNoite nome="Júnior"/>
</div>, document.getElementById('root'))
*/

//Importando BomDia
//ReactDOM.render(<BomDia nome="Wilhams" idade={23}/>, document.getElementById('root'))

//ReactDOM.render(<Primeiro />, document.getElementById('root'))
//o nome do componente é obrigatório que tenha letra maiscula exe: Primeiro
//mas se na hora de renderizar vc colocar uma div ou outra tag hmtl irá funcionar normal
//essa regra da letra maiscula só é válida para quando criamos nosso próprio componente

//Usando JSX através de uma variável
//const elemento = <h1>Wilhams Júnior/ Developer Júnior</h1>
//ReactDOM.render(elemento, document.getElementById('root'))

//ReactDOM.render(<h1>Estude de domingo a domingo</h1>, document.getElementById('root'))

/**
 * Pode ser implementado o html como nesta forma do código ou por uma variável
 * Esta implementação é chamada de JSX que siginifica implantar hmtl em javascript
 */






//IMPORTANDO UMA CLASS (Arquivo: Saudacao.jsx)
/*
ReactDOM.render(  //tipo e nome são variáveis atribuídas no arquivo saudação, aqui elas podem ser alteradas diretamente, mas como estou
                 //fazendo o uso do estado ou state, o state que é o responsável por alterar o valor dessas varíáveis, na verdade nem precisa usar essa var aí abaixo
    <div>
        <Saudacao tipo ="Boa Tarde" nome="Wilhams" />    
    </div>
    ,document.getElementById('root'))*/





//IMPORTANDO O ARQUIVO PAI E FILHO
/*
ReactDOM.render(
    <div>
     <Pai nome="Jeová" sobrenome="Deus Poderoso">
        <Filho nome="Paulo" sobrenome="Rodrigo" /> {/*Para que esses elementos Filho seja aceitos no arquivo Pai, temos que ir no arquivo Pai e colocar {props.children} aí sim serão aceitos e visualizados no browser
        <Filho nome="Paulo" sobrenome="Rodolfo" />
     </Pai>
</div>,document.getElementById('root')
)*/




//Agora estamos utilizando o mesmo arquivo para exemplificar uma forma de clonar um elemento
//UTILIZANDO O React.cloneElement no arquivo Pai.jsx - com ela conseguimos clonar o elemento e add mais propriedades ao elemento

ReactDOM.render(
    <div>
        <Pai nome="Jeová" sobrenome="Poderoso">
            <Filho nome="Jesus" />
            <Filho nome="Miguel" />
            <Filho nome="Arcanjo" />

        </Pai>
    </div>, document.getElementById('root'))