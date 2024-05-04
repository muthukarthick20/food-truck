import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Index() {
    const[data,setdata] = useState([])
    const email = sessionStorage.getItem('uemail')
    useEffect(()=>{
        axios.post("http://localhost:3001/vendorproductfind",{email})
        .then(user => { console.log(user)
            setdata(user.data)
        })
        .catch(error => { console.log(error); })
    },[])
    return (
        <div>
                <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>email</th>
                        <th>address</th>
                        <th>address_2</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                    </tr>
                </thead>
                
                <tbody>
                {
                data.map((user)=>(
                    <tr>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.address_2}</td>
                        <td>{user.city}</td>
                        <td>{user.state}</td>
                        <td>{user.zip}</td>
                    </tr>
                ))
            }
                </tbody>
            </Table>
            
            
        </div>
    )
}

export default Index;