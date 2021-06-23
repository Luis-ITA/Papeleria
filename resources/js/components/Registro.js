import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Accordion, Alert, Card, Button, Form, Badge, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { usestate } from 'react'
import axios from 'axios'
import "./Registro.css"

export default class Registro extends Component {

    constructor (props){
        super(props)
        this.state = {
            id_cliente:'',
            nombre:'',
            apellido:'',
            direccion:'',
            correo:'',
            contraseña:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        const cliente = {
            id_cliente: this.state.id_cliente,
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            direccion: this.state.direccion,
            correo: this.state.correo,
            contraseña: this.state.contraseña
        }

        axios.post('api/insertarCliente',{
            id_cliente: this.state.id_cliente,
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            direccion: this.state.direccion,
            correo: this.state.correo,
            contraseña: this.state.contraseña
        })
        console.log(event.target.value)
    }

    render() {
        return (
            <div className="card">
                <h1 className="Encabezado"><strong>Clientes</strong></h1>  
                    <br></br>
                        <Alert variant="success">
                                <Alert.Heading>Registrate con nosotros</Alert.Heading>
                                <p>
                                    Registrarte con nosotros tiene sus beneficios. <br></br>
                                    El tener nùmero de cliente te hace disfrutar de varios privilegios como:
                                    <br></br>
                                    <Accordion defaultActiveKey="3">
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="light" eventKey="0">
                                                Promociones y descuentos exclusivos
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body>Rebajas en articulos escolares, <br></br>
                                                descuentos y promociones<br></br>
                                                a los que nuestros clientes registrados <br></br>
                                                solo tendran acceso</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="light" eventKey="1">
                                                Facilidades de pago
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                             <Card.Body>Plazos amplios para finalizar la compra<br></br>
                                                 ¡Aceptamos cualquier tarjeta (credito, debito, vales)!
                                             </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="light" eventKey="2">
                                                ¡Entre otras mas!
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                             <Card.Body> Facturacion, entregas rapidas a domicilio, etc...</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>  
                                </p>
                                <hr />
                                <p className="mb-0">
                                    Para registrate con nosotros, solo llena el siguiente formulario.
                                    ¡No esperes mas!
                               </p>
                            </Alert> 
                            <br></br>
                            <br></br>
                            <h3>
                                <Badge variant="light" className="RegistroClienteEnca">Formulario de Registro</Badge>
                            </h3>
                            <div>
                            <div className="Left">
                            <Form className="RegistroCliente">
                                <Form.Group controlId="formBasicNum">
                                    <Form.Label>Numero de cliente</Form.Label>
                                    <Form.Control 
                                    className="Input"
                                    type="text" 
                                    name="id_cliente"
                                    placeholder="Numero de cliente"
                                    required
                                    value={this.state.id_cliente} 
                                    onChange={this.handleChange}/>
                                        <Form.Text className="text-muted">
                                             Numero de 4 digitos; Facil de recordar
                                         </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control 
                                    className="Input"
                                    type="text" 
                                    name="nombre"
                                    placeholder="Ingresa tu nombre" 
                                    value={this.state.nombre} 
                                    onChange={this.handleChange}/>
                                </Form.Group>

                                 <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="apellido"
                                    className="Input"
                                    placeholder="Ingresa tu apellido" 
                                    value={this.state.apellido} 
                                    onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicDireccion">
                                    <Form.Label>Direccion</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    className="Input"
                                    name="direccion"
                                    placeholder="Ingresa tu direccion" 
                                    value={this.state.direccion} 
                                    onChange={this.handleChange}/>
                                         <Form.Text className="text-muted">
                                             Calle y numero, colonia, municipio, estado
                                         </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Correo Electronico</Form.Label>
                                    <Form.Control 
                                    type="text"
                                    className="Input"
                                    placeholder="Ingresa tu e-mail" 
                                    name="correo"
                                    value={this.state.correo} 
                                    onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    name="contraseña"
                                    className="Input"
                                    placeholder="Password"
                                    value={this.state.contraseña} 
                                    onChange={this.handleChange} 
                                    />
                                </Form.Group>

                                <br></br>
                                <Button variant="success" type="button" onClick={this.handleSubmit}>
                                    Registrarse
                                </Button>
                            </Form>
                        </div>
                        <div className="Right">
                            <img
                                className="Picture"
                                src="http://localhost/Papeleria/public/Imagenes/form.jpg"
                            />
                        </div>
                    </div>
            </div>
        );
    }
}

if (document.getElementById('registro')) {
    ReactDOM.render(<Registro />, document.getElementById('registro'));
}
