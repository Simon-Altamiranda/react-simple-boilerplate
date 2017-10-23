import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import SubRuta from './SubRuta'
import Schedule from './Schedule'
const Main = () => (
    <Main>
        <Switch>
            <Route exact path='/' component = {Home}>
            <Route path='/jugadores' component = {Subruta}>
            <Route path='/schedule' component = {Schedule}>
        </Switch>
    </Main>
)
export default Main 
