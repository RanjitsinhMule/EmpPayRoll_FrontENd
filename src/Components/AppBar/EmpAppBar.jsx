import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import './EmpAppBar.css';
import img1 from './logo.png';

class EmpAppBar extends Component {
    render() {
        return (
                <div>
                  
              <AppBar className='muibar' sx={{ background:'white'}} position="static" >
              <img className='logo'src={img1} alt="Logo" />
              <span  className='Apptitle'>EMPLOYEE</span>
              <br/>
              <span className='title'>PAYROLL</span>
              </AppBar>        
              </div>
            
        );
    }
}

export default EmpAppBar;