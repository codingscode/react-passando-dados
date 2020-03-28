import React from 'react'

//import classes from './Formulario.css'

const formulario = (props) => {
     
            return (
                <div   onChange={props.atualizar}> {/* className={classes.moldura} */}
                    <div>{props.nome} :</div>
                    <input type="text" value={props.campo} />
                    
                </div>
            )
    
}

export default formulario