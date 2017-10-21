import React from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Banner from './banner';
/*import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable.js'
*/
class MainPage extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="aventura"
                    />
                    <Banner/>
                </MuiThemeProvider>

            </div>
        )
    }
}
export default MainPage;