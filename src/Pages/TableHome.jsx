import React, { Component } from 'react';
import EmpAppBar from '../Components/AppBar/EmpAppBar';
import EmpDetailsCard from '../Components/EmployeeDetailsCard/EmpDetailsCard';


class TableHome extends Component {
    render() {
        return (
            <div>
                <EmpAppBar/>
                <EmpDetailsCard/>
            </div>
        );
    }
}

export default TableHome;