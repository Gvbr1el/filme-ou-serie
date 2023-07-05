function FilmeFilho(props){
    return(
        <div>
            <p>Filme: <strong>{props.titulo}</strong></p>
            <p>Já assistiu esse filme?</p>
            <input type="checkbox" name="assistido" checked={props.assistido} onChange={props.functionFilmeAssistido}/>
            <p>Você <strong>{props.filmeAssistido}</strong> assistiu o filme <strong>{props.titulo}</strong></p>
            <hr />
            <p>É {props.categoriaContraria}?</p>
            <input type="checkbox" name="filmeOuSerie" checked={props.filmeOuSerie} onChange={props.functionCategoria}/>
            <p>É {props.categoria}, obrigado pelo esclarecimento!</p>
        </div>
    )
}

export default FilmeFilho