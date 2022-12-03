import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

  state= {
    termino : 'cafe',
    imagenes : []
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = 'https://pixabay.com/api/?key=31801074-fc59285cfbb78ce3562568f73&q=$'+'{'+ termino + '}';

    //console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json()) 
    .then(resultado => this.setState({ imagenes : resultado.hits }))
  }

  datosBusqueda = (termino)=> {
    this.setState({
      termino
    }, ()=> {
      this.consultarApi();
    })
  }
  
  render() {
    return (
     <div className="app container">
       <div className="jumbotron" >
          <p className="lead text-center">Buscador de imagenes</p>

          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
       </div>
       <Resultado 
        imagenes = {this.state.imagenes}
       />
     </div>
   );
  }
}

export default App;
