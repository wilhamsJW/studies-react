import React from 'react'

 export const BoaTarde = props => <h1>Boa Tarde {props.nome}!</h1>

 export const BoaNoite = props => <h1>Boa Noite {props.nome}!</h1>

export default {BoaTarde, BoaNoite}
//export default cria um objeto q no index posso chamr de qq nome, chamei no index como x, posso exportar duas const de uma vez só

//tbm poderia colocar o export antes de cada const, porém seria mais código.