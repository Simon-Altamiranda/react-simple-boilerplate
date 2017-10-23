import React from 'react'
import JugadoresDB from './api'
import {Link} from 'react-router-dom';

const Jugador = (props) => {
    const jugador = JugadoresDB.get(
        parseInt(props.match.params.numero,10)
    )
    if(!jugador){
        return <div style={{ paddingLeft:260}}> jugador no encontrado</div>
    }
    return(
        <div style = {{paddingLeft:260}}>
            <h2>Nombre: { jugador.nombre}(#{ jugador.numero } ) </h2>
            <h2>Posicion: { jugador.posicion }</h2>
            <br/>
            <Link to='/jugadores'>Atras</Link>
        </div>
    )
}
export default Jugador