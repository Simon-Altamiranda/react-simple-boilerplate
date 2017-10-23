import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ListadoJugadores from './ListadoJugadores'
import Jugador from './Jugador'
const SubRuta = () => (
    <Switch>}
        <Route exact path='/jugadores' component = {ListadoJugadores}/>
        <Route path='/jugadores/:numero' component= {Jugador}/>
    </Switch>
)
export default SubRuta