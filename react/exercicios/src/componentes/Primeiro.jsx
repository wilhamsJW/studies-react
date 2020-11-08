import React from 'react'

export default function() {
    return <h1 className="">Primeiro Teste</h1>

    //esses são exemplos de componentes baseado em função
    //exportação da function, pode ser importada no arquivo index.js
    //no browser aparecerá o return de teste. 
    //também posso implementar código html nesse return. porém tenho q importar o react
    //neste arquivo por ser um padrão JSX

    /**
     * Exemplo de código Html sendo implemntado através do JSx
     * 
     * import React from 'react'
     * 
     * export default function() {
       return <h1>Olá mundo!</h1>
     }
     */
}

/**
 * Exemplo abaixo com arrow function
 * 
 * export default () => <h1>Olá mundo!</h1>
 * 
 * Aviso: para usar mais de uma tag terá q englobar com uma div ou usar o fragment(veja mais no arquivo bom dia)
 */