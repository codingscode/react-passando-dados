import React, {Component} from 'react'


import Formulario from './componentes/Formulario'
import Resumo from './componentes/Resumo'
import Finalizado from './componentes/Finalizado'

import classes from './App.css'
import classes2 from './componentes/Formulario.css'

class App extends Component {
    
    state = {
        campos: [
          {id: '1', entrada: 'nome_usuario', nome: 'Nome'},
          {id: '2', entrada: 'sexo_usuario', nome: 'Sexo'},
          {id: '3', entrada: 'idade_usuario', nome: 'Idade'},
          {id: '4', entrada: 'cidade_usuario', nome: 'Cidade'} 
        ],
        fazermostrar: false
    }
    
    
    atualizar = (evento, id) => {
       const entradaIndice = this.state.campos.findIndex(
           p => { return p.id === id}
       )

       const campo = {
           ...this.state.campos[entradaIndice]
       }

       campo.entrada = evento.target.value

       const campos = [...this.state.campos]
       campos[entradaIndice] = campo

       this.setState({campos: campos})
    }
    
    mostrarResumo = () => {
        const visivel = this.state.fazermostrar
        this.setState({fazermostrar: !visivel})
    }

       
    render() {

          let elementos = null
          elementos = (
              <div className={classes2.moldura}>
                   <h1>Dados</h1>
                   {this.state.campos.map((atual, indice) => {
                       return (
                          <Formulario campo={atual.entrada} nome={atual.nome} key={atual.id} 
                            atualizar={(evento) => this.atualizar(evento, atual.id)}/>
                       )
                   })}
                   <button onClick={this.mostrarResumo} >Transferir</button>
              </div>
          )
          
          let resumo = null
          if (this.state.fazermostrar) {
              resumo = (
                    <Resumo  nome={this.state.campos[0].entrada} sexo={this.state.campos[1].entrada} 
                    idade={this.state.campos[2].entrada} cidade={this.state.campos[3].entrada} />
              )
              elementos = <Finalizado />
          }
          else {
              resumo = null
          }      

          return (
            <div >
                <h1 className={classes.usar2}>Passando Dados</h1>
                <span className={classes.usar}>
                     {elementos}
                     {resumo}
                </span>
            </div>
          );
    }
}

export default App;
