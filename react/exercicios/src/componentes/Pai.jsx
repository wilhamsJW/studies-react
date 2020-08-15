import React from 'react'
import Filho from './Filho'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul> {/*Esses 3 pontinhos é o operador spreed, ele add um array ou var dentro de outro array, sintaxe:3 pontos seguidos do nome do array, ex: ...nomedoarray*/}
            <Filho nome="Yavé" sobrenome={props.sobrenome} />
            <Filho {...props} />
            <Filho nome="JHEOVA" {...props} />
        </ul>
    </div>


