import React from 'react'

 const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

 const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export default {BoaTarde, BoaNoite}
//export default cria um objeto q no index posso chamr de qq nome, chamei no index como x, posso exportar duas const d euma vez só

//tbm poderia colocar o export antes de cada variável, porém seria mais código.