import React  from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

ReactDOM.render(<BomDia nome="Wilhams" idade={23}/>, document.getElementById('root'))


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
