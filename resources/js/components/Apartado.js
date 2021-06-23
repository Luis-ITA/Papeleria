import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button, Table, Form, Accordion, Card, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {useState} from 'react'
import "./Apartado.css"

export default class Apartado extends Component {

    constructor(props){
        super(props);
        this.state = {
          apartado:[],
          sku_articulo:'',
          numero_cliente:'',
          abono:'',
          condiciones:'',
          id_apartado:'',
          edit: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        const apartado = {
            sku_articulo: this.state.sku_articulo,
            numero_cliente: this.state.numero_cliente,
            abono: this.state.abono,
            condiciones: this.state.condiciones
        }

        axios.post('api/insertarApartado',{
            sku_articulo: this.state.sku_articulo,
            numero_cliente: this.state.numero_cliente,
            abono: this.state.abono,
            condiciones: this.state.condiciones
        })
        console.log(event.target.value);
    }

    handleDelete(event)
    {
        axios.post('api/eliminarApartado',{
            id_apartado: this.state.id_apartado
        })
        console.log(event.target.value);

    }
    
    handleUpdate(event)
    {
        axios.post('api/actualizarApartado',{
            id_apartado: this.state.id_apartado,
            sku_articulo: this.state.sku_articulo,
            numero_cliente: this.state.numero_cliente,
            abono: this.state.abono,
            condiciones: this.state.condiciones
        })
        console.log(event.target.value);
    }

    componentDidMount(){ 

        axios.get("http://localhost/Papeleria/public/api/mostrarApartados").then(response=>{
          this.setState({apartado:response.data})
        }).catch(error=>{
          alert("Error "+error)
        })
     }

    render() {
        return (
                <div className="ApartadoFuente">
                        <h1><strong>Apartados de mercancia</strong></h1>  
                        <br></br>
                        <Card className="Fondo"></Card>
                        <br></br>
                        <br></br>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Num. de Apartado</th>
                                <th>Sku del articulo</th>
                                <th>Num. de cliente</th>
                                <th>Abono (MXN)</th>
                                <th>Condiciones</th>
                                <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderList()}
                            </tbody>
                        </Table>

                        <Form className="RegistroAp"> 
                                <Form.Group controlId="formBasicNum">
                                    <Form.Label>Sku del articulo</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    className="Input"
                                    name="sku_articulo"
                                    value={this.state.sku_articulo || ''} 
                                    onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Numero del cliente</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="numero_cliente"
                                    className="Input"
                                    value={this.state.numero_cliente || ''} 
                                    onChange={this.handleChange}/>
                                </Form.Group>

                                 <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Cantidad abonada (MXN)</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="abono"
                                    className="Input"
                                    value={this.state.abono || ''} 
                                    onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicDireccion">
                                    <Form.Label>Condiciones del apartado</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="condiciones"
                                    className="Input" 
                                    value={this.state.condiciones || ''} 
                                    onChange={this.handleChange}/>
                                </Form.Group>
                                    <ButtonGroup aria-label="Basic example">
                                        {
                                            this.state.edit?
                                         <Button variant="primary" onClick={this.handleUpdate.bind(this)}>Actualizar Apartado</Button>
                                            :
                                         <Button variant="success" onClick={this.handleSubmit}>Agregar Apartado</Button>
                                        }
                                    </ButtonGroup>
                            </Form>
                            <br></br>
                            <br></br>
                            <Accordion defaultActiveKey="1">
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="warning" eventKey="0">
                                        Cancelar Apartado
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form>
                                        <InputGroup className="Input">
                                            <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-sm">ID del apartado a eliminar</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                            aria-label="Small" 
                                            aria-describedby="inputGroup-sizing-sm"
                                            type="text" 
                                            name="id_apartado"
                                            value={this.state.id_apartado || ''} 
                                            onChange={this.handleChange} />
                                        </InputGroup>
                                        <br></br>
                                        <Button variant="danger" type="button" onClick={this.handleDelete.bind(this)}>Eliminar Apartado</Button>
                                        </Form>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
            </div>
        );
    }
    showModalEdit(data){
        this.setState({
            id_apartado: data.id_apartado,
            sku_articulo: data.sku_articulo,
            numero_cliente: data.numero_cliente,
            abono: data.abono,
            condiciones: data.condiciones,
            edit: true
        })
      }

    renderList(){
        return this.state.apartado.map((data)=>{
          return(
            <tr>
              <td>{data.id_apartado}</td>
              <td>{data.sku_articulo}</td>
              <td>{data.numero_cliente}</td>
              <td>{data.abono}</td>
              <td>{data.condiciones}</td>
              <td> <Button variant="primary" type="button" onClick={()=>this.showModalEdit(data)} >Editar</Button> </td>
            </tr>
          )
        })
      }
}

if (document.getElementById('apartado')) {
    ReactDOM.render(<Apartado />, document.getElementById('apartado'));
}
