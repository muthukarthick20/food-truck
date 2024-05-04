import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function VendorLoginpage() {
    const navigate = useNavigate()
    const [data, setdata] = useState({ email: "", password: "" })
    const submit = (e) => {
        e.preventDefault()
        console.log(data)
        axios.post("http://localhost:3001/login", data)
            .then(user => {
                console.log(user)
                if (user.data.Status === "success") {
                    sessionStorage.setItem("uemail", user.data.email)
                    console.log(user.data.email);
                    navigate("/home")
                }
                else {
                    navigate("/login")
                }

            })
            .catch(error => { console.log(error); })
    }

    return (
        <div className="d-flex vh-100 bg primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submit}>
                    <center><h1>Login</h1></center>
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
                    <button className="btn btn-success">submit</button>
                </form>

            </div>
        </div>
    )
}

export default VendorLoginpage;