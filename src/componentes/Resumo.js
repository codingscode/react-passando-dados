import React from 'react'

import classes from './Resumo.css'

const resumo = (props) => {
     
         return (
             <div className={classes.aplicar} >
                 <h2>Quadro Resumo</h2>
                 Nome : 
                 <div >{props.nome}</div> <br /> {/* value={props.nome} */}
                 Sexo :
                 <div >{props.sexo}</div> <br />
                 Idade :
                 <div >{props.idade}</div> <br />
                 Cidade :
                 <div >{props.cidade}</div>
             </div>
         )
}

export default resumo

