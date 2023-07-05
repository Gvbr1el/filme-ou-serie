import React from 'react';
import FilmeFilho from './FilmeFilho.jsx'

class Filmes extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            titulo: "Batman",
            assistido: false,
            filmeAssistido:"nunca",
            filmeOuSerie: false,
            categoria: "filme",
            categoriaContraria: "série"
        }
    }

    filmeAssistido = () => {
        this.setState({assistido: this.state.assistido ? false : true})
        this.setState({filmeAssistido: this.state.assistido ? 'nunca' : 'já'})
    }
    
    categoria = () => {
        this.setState({filmeOuSerie: this.state.filmeOuSerie ? false : true})
        this.setState({categoria: this.state.filmeOuSerie ? 'filme' : 'série'})
        this.setState({categoriaContraria: this.state.filmeOuSerie ? 'série' : 'filme'})
    }

    render(){
        return(
            <div>
                <FilmeFilho titulo={this.state.titulo} assistido={this.state.assistido} filmeAssistido={this.state.filmeAssistido} functionFilmeAssistido={this.filmeAssistido} filmeOuSerie={this.state.filmeOuSerie}  categoria={this.state.categoria} categoriaContraria={this.state.categoriaContraria} functionCategoria={this.categoria}/>
            </div>
        )
    }
}

export default Filmes