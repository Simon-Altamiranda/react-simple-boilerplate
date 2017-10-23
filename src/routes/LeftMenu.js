import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
const LeftMenu = () => (
    <div>
        <Drawer open={true}>
            <MenuItem><Link to='/'>Home</Link></MenuItem>
            <MenuItem><Link to='/jugadores'>Jugadores</Link></MenuItem>
            <MenuItem><Link to='/schedule'>Schedule</Link></MenuItem>

        </Drawer>
    </div>
)
export default LeftMenu