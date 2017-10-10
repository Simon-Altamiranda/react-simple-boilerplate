import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions,CardHeader,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
class Formulario extends React.component{
    constructor(props){
        super(props);
        this.referenciaInput={};
        this.state={
            nombre:'',
            direccion:'',
            telefono:'',
            sexo:'',
        };
    }

    /*
    componetDidMount(){
        this.referenciaInput.focus();
    }
    /*
    handleClick = () =>{
        console.log('se llamo al render');
        this.referenciaInput.focus();
    }
    */
    handleNombreChange = (evt) =>{
        console.log(evt.target.value);
            this.setState({nombre: evento.target.value});
    }

    handleDireccionChange = (evt) =>{
        console.log(evt.target.value);
            this.setState({direccion: evento.target.value });
    }
    handleClick = ()=>{
        console.log(this.state);
        this.props.onOk(this.state);
}
    render(){
        return(
            <Card expanded={true}>
                <CardHeader
                    title="Formulario de ingreso"
                    subtitle="El usuario debera llenar este formulario sin excepcion"
                />
                <CardText expanded={true}>
                    <form>
                        <TextField floatingLabelText="Nombre completo"/><br/>    
                        <TextField floatingLabelText="Direccion"/><br/>    
                        <TextField floatingLabelText="Telefono"/><br/>    
                        <TextField floatingLabelText="Email"/><br/>    
                        <TextField defaultValue="Valor Opcional"/><br/>
                        <SelectField
                            floatingLabelText = "Sexo"
                            value={this.state.formulario.sexo}
                        >
                            <MenuItem value={1} primaryText="Masculino"/>
                            <MenuItem value={2} primaryText="Femenino"/>
                            <MenuItem value={3} primaryText="Decano"/>
                        </SelectField>
                        <input
                        type='text'
                        valor= 'valor por defecto'
                        ref={(objRef)=>{this.referenciaInput=objRef}}
                        />
                    </form>
                </CardText>
                <CardActions>
                    <FlatButton label = "imprimir State" onClick= {this.handleClick}>
                </CardActions>
            </Card>
        );
    }
}
export default Formulario;