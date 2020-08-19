import './Header.css'
import React from'react'

export default props => //d-none = para celulare o header não irá aparecer, d-sm-flex - será flex para todos os dispositivos
<header className="header d-none d-sm-flex flex-column">
    <h1 className="mt-3">
        <i className={`fa fa-${props.icon}`}></i> {props.title} 
        <i className={`fa fa-${props.icon}`}></i>                  {/*{`fa fa-${props.icon} = referencia pega no awesome, ${props.icon} é o parãmetero sendo enviado do App.jsx */}
    </h1>
<p className="lead text-muted">{props.subtitle}</p>
</header>