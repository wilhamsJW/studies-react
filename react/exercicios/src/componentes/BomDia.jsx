import React, {Fragment} from 'react'


export default props => 
/* Para usar mais de uma tag temos q envolver as tags com uma div
<div>
<h1>Bom dia {props.nome}!</h1>
<h2>Até mais! :)</h2>
</div>*/

//Caso não queira usar uma div pra não sofrer alteração no layout da página, poderá usar o React.Fragment
//Tamém posso usar o React.fragment na importação, dessa forma não será necessário usar a tag <React.Fragment>
//e sim apenas a tag <Fragment>

/*usando a tag <React.Fragment> sem importação
<React.Fragment>
<h1>Bom dia {props.nome}!</h1>
<h2>Até mais! :)</h2>
</React.Fragment> */

/*usando a tag <Fragment> com importação */
<Fragment>
<h1>Bom dia {props.x}!</h1>
<h1>Sua idade é: {props.idade}</h1>
<h2>Até mais! :)</h2>
</Fragment> 

//props é um parãmetro usado na arrow function, por convenção usamos o nome props
//props.nome é a variável criada no idex, é um parãmetro, um valor que vai ser mostrado no browser
