import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Col, Row, Button } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'


function Vendorhomepage() {
    const navigate = useNavigate()
    const email = sessionStorage.getItem("uemail")
    const [data, setdata] = useState({ email: email, address: "", address_2: "", city: "", state: "", zip: "" })

    const submit = (e) => {
        e.preventDefault()
        console.log(data)
        axios.post("http://localhost:3001/homepage", data)
            .then(user => { console.log(user) 
            navigate('/index')
            })
            .catch(error => { console.log(error); })
    }

    return (
        <Container>
            <center><h1>Form Page</h1></center>
            <Form onSubmit={submit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            value={data.email} onChange={e => setdata({ ...data, email: e.target.value })} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St"
                        onChange={e => setdata({ ...data, address: e.target.value })} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor"
                        onChange={e => setdata({ ...data, address_2: e.target.value })} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={e => setdata({ ...data, city: e.target.value })} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose..." onChange={e => setdata({ ...data, state: e.target.value })} >
                            <option>Choose...</option>
                            <option value={"Tamilnadu"}>TamilNadu</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control onChange={e => setdata({ ...data, zip: e.target.value })} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Vendorhomepage;