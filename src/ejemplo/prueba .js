import Formulario from './ejemplo/Formulario';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
constructor(){
    this.state = {mensaje:'ingrese valores en el formulario y presione ok'}
  }
  handleOk = (valores) => {
    this.setState({mensaje:`se envio el formulario de ${valores.nombre}`})

  }

<MuiThemeProvider>
<div>
  <div>
    {this.state.mensaje}
  </div>  
  <Formulario
    onOk = {this.handleOk}
  />
</div>
</MuiThemeProvider>