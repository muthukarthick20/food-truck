import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

function VendorRegister() {
    const navigate = useNavigate()
    const [data, setdata] = useState({ name: "", email: "", password: "", phone: "", model: "", price: "" })

    const submit = (e) => {
        e.preventDefault()
        console.log(data)
        axios.post("http://localhost:3001/register", data)
            .then(user => {
                console.log(user)
                navigate("/login")
            })
            .catch(error => { console.log(error); })
    }

    return (
        <div className="d-flex vh-100 bg primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submit}>
                    <center><h1>Registration</h1></center>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter your name " className="form-control"
                            onChange={e => setdata({ ...data, name: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter your email " className="form-control"
                            onChange={e => setdata({ ...data, email: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">password</label>
                        <input type="password" placeholder="Enter your password " className="form-control"
                            onChange={e => setdata({ ...data, password: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Phone</label>
                        <input type="number" placeholder="Enter your number " className="form-control"
                            onChange={e => setdata({ ...data, phone: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Model</label>
                        <input type="text" placeholder="Model Name " className="form-control"
                            onChange={e => setdata({ ...data, model: e.target.value })} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Price</label>
                        <input type="number" placeholder="price " className="form-control"
                            onChange={e => setdata({ ...data, price: e.target.value })} />
                    </div>
                    <Button type='submit' className="btn btn-success">submit</Button>
                </form>

            </div>
        </div>
    )
}

export default VendorRegister;