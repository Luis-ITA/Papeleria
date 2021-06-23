import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Table, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Contacto.css"

export default class Contacto extends Component {
    render() {
        return (
            <div className="Contact">
                <h1><strong>Contacto</strong></h1>
                     <br></br>
                            <Table striped borderless hover>
                                <tbody>
                                    <tr>
                                    <td> 
                                        <img
                                        src="http://localhost/Papeleria/public/Imagenes/Face.png" thumbnail
                                        width = "40"
                                        height = "40"
                                        />
                                    </td>
                                    <td> Facebook </td>
                                    <td>Facebook/TecnoPapeleria</td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <img
                                        src="http://localhost/Papeleria/public/Imagenes/telefono.jpeg" thumbnail
                                        width = "40"
                                        height = "40"
                                        />
                                    </td>
                                    <td>915-32-87</td>
                                    <td>915-56-49</td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <img
                                        src="http://localhost/Papeleria/public/Imagenes/gmail.png" thumbnail
                                        width = "40"
                                        height = "40"
                                        />
                                    </td>
                                    <td>tecnopapeleria.ventas@gmail.com</td>
                                    <td>tecnopapeleria@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <br></br>
                            <Modal.Dialog>
                                <Modal.Header>
                                    <Modal.Title>Direccion</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        <strong> TecnoPapeleria Matriz </strong> <br></br>
                                        Calle del Jaque #144 <br></br>
                                        Fracc. Lomas Del Ajedrez <br></br>
                                        Codigo Postal 20299 Aguascalientes Ags, Mexico
                                    </p>
                                </Modal.Body>
                            </Modal.Dialog>
                            <br></br>
            </div>
        );
    }
}


if (document.getElementById('contacto')) {
    ReactDOM.render(<Contacto />, document.getElementById('contacto'));}