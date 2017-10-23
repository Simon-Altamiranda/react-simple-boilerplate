import React from 'react'
import {Card, CardActions, CardHeader,CardText} from 'material-ui/Card';

const Home = => (
    <div style= {{paddingLeft:260 } }>
        <Card style={{
            height:800
        }}
        >
        <CardHeader
            title="bienvenidosal home de la aplicacion web"
            subtitle= "Esta es la pagina por defecto de la app, aqui encontramos tu panel"
            actAsExpander={false}
            showExpandableButton={false}
        />
        <CardText expandable={false}>
            aqui pondremos el panel de control con todos los botones
        </CardText>
        </Card>
    </div>    
)
export default Home