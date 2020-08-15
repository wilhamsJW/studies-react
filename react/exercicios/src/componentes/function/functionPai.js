import React from 'react'

//Função que está pegandos os dados de dois arquivos, arquivo Pai.jsx e Filho.jsx
export function withCloneElement (props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props, ...child.props })
     })
}