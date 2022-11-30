import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import './EmpDetailsCard.css';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

export default function EmpDetailsCard() {

    const [employee, setEmployee] = useState([])
    const [shouldrefresh, addrefresh] = useState(false)
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get("http://localhost:8080/listAll")
        setEmployee(result.data);
        //console.log(this.state.employee);
    }


    const deletearr=async (id) =>{
        await axios.delete(`http://localhost:8080/deleteemployee/${id}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error)
        });
        loadEmployee();
    }

    async function updatearr(props){
        const result = await axios.put("http://localhost:8080/updateEmployeeByToken",props)
        alert("Emplyee Updated")
        console.log("Update",result.data)

    }

    const handleEmpSearch = async () => {
        console.log(searchData)
        const result = await axios.get(`http://localhost:8080/getsingleemployee/${searchData}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data.message)
            });
        setEmployee(result.data);

    }
    const navigate = useNavigate(); 
    const  handleadduser=()=>{
        navigate('/HomePage')
    }

    return (

        <div>
            <br />
            <div style={{ display: "flex", justifyContent: "end", flexDirection: "row" }}>

                <TextField placeholder='search ' value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}/>

                <Button onClick={handleEmpSearch}>Search</Button>
                
                <button onClick={()=>handleadduser()}>Add Users</button>

            </div>
            <Toolbar></Toolbar>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table" className='TableRow' style={{   width:"100%" , height: '67px' }}>
                    <TableHead  style={{backgroundColor:"gray"}}>
                        <TableRow >
                        <TableCell className='TableHeaderCell'>ID</TableCell>
                            <TableCell className='TableHeaderCell'>Name</TableCell>
                            <TableCell className='TableHeaderCell'>Gender</TableCell>
                            <TableCell className='TableHeaderCell'>Department</TableCell>
                            <TableCell className='TableHeaderCell'>Salary</TableCell>
                            <TableCell className='TableHeaderCell'>Start Date</TableCell>
                            <TableCell className='TableHeaderCell'>Action</TableCell>
                            <TableCell className='TableHeaderCell'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            employee.map((employees,key) => (
                                <TableRow key={key}>
                                    <TableCell> {employees.employeeId} </TableCell>
                                    <TableCell> {employees.employeeName} </TableCell>
                                    <TableCell> {employees.gender} </TableCell>
                                    <TableCell> {employees.department}</TableCell>
                                    <TableCell> {employees.salary}</TableCell>
                                    <TableCell> {employees.startDate}</TableCell>
                                    <TableCell onClick={()=>{
                                        updatearr(employees.token)
                                    }}>  <EditIcon/>  </TableCell>
                                    <TableCell><DeleteIcon onClick={()=>
                                        deletearr(employees.employeeId)
                                    }/> </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}