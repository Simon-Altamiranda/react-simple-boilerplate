import React from 'react'
import JugadoresDB from './api'
import {Link} from 'react-router-dom'

const ListadoJugadores = () =>(
    <div style={{ paddingLeft:260}}>
       <ul>
        {
            JugadoresDB.all().map(jugador => (
                <li key = {jugador.numero}>
                    <Link to = {`/jugadores/${jugador.numero} `}>
                    {jugador.nombre}
                    </Link>
                </li>
            ))
        }
        </ul> 
        </div>
)
export default ListadoJugadores