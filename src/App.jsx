import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import LeftMenu from './routes/LeftMenu'
import Main from './routes/Main';
//import FilterableProductTable from './componentes/FilterableProductTable'

class App extends Component {

  render() {
  /*  const DB = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: "$9.99", stocked: true, name: "Baseball"},
      {category: 'Sporting Goods', price: "$29.99", stocked: false, name: "Basketball"},
      {category: 'Electronics', price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: 'Electronics', price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: 'Electronics', price: "$199.99", stocked: true, name: "Nexus 7"}
    ];
    return (
    <FilterableProductTable store={DB}/>
    );*/
    return(
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
              <LeftMenu/>
              
              <Main/>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );


  }
}
export default App;
