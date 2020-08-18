import React from 'react'
import './Button.css'


export default props => {//Usamos o $ pq estamos dentro de uma template string usando código JS Puro, para interpolar uma variável usamos o $

    let x = 'button '            //criada uma variável 'x', chamada button, += está concatenando com props.operation, o resultado será = button.operation, o resto se trata de if ternário 
    x += props.operation ? 'operation' : '' //button.operation
    x += props.double ? 'double' : ''      //button.double
    x += props.triple ? 'triple' : ''     //button.triple

    return (<button onClick={e => props.click(props.label)} //Aviso: onClick={e => props.click(props.label)} = props.click permite o button receber uma função com um clik e que as funções dentro do button no Caculator sejam executadas com sucesso, props.label é para que os números sejam mostrados no console e no display
         className={x}>
        {props.label}
    </button>
    )
}


/* verificar pq esse código não conseguiu usar as classes do css

export default props => //Usamos o $ pq estamos dentro de uma template string usando código JS Puro, para interpolar uma variável usamos o $
    <button onClick={e => props.click && props.click(props.label)} className={`

 ${props.operation ? 'operation' : ''}
 ${props.double ? 'double' : ''}
 ${props.triple ? 'triple' : ''}
 `}>
        {props.label}
    </button>*/
