import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Card, CardGroup, InputGroup, FormControl, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import "./Producto.css"

export default class Producto extends Component {


    constructor(props){
        super(props);
        this.state = {
          articulo:[],
          articuloCopia:[],
          search:''
        }
      }
      componentDidMount(){ 

        axios.get("http://localhost/Papeleria/public/api/mostrarArticulos").then(response=>{
          this.setState({
            articulo:response.data,
            articuloCopia: response.data
          })
        }).catch(error=>{
          alert("Error "+error)
        })
     }

     filter(event)
     {
        var text = event.target.value
        const data = this.state.articuloCopia
        const newData = data.filter(function(item){
            const itemData = item.producto.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            articulo: newData,
            search: text
        })
     }

    render() {
        return (
                    <div className="ProductoFuente">
                            <h1 className="Titulo"><strong>Nuestros Articulos</strong></h1>
                            <CardGroup>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="http://localhost/Papeleria/public/Imagenes/coloresmae.jpg" height="260" />
                                    <Card.Body>
                                        <Card.Title>Colores</Card.Title>
                                        <Card.Text>
                                            Compra de la mejor calidad, a los mejores precios
                                        </Card.Text>
                                    </Card.Body>
                                 </Card>

                                 <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="http://localhost/Papeleria/public/Imagenes/goma.jpg" />
                                    <Card.Body>
                                        <Card.Title>Gomas</Card.Title>
                                        <Card.Text>
                                            Las mejores gomas, al mejor precio
                                        </Card.Text>
                                    </Card.Body>
                                 </Card>
                                 <br></br>
                                 <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="http://localhost/Papeleria/public/Imagenes/cuaderno.png" />
                                    <Card.Body>
                                        <Card.Title>Cuadernos</Card.Title>
                                        <Card.Text>
                                            Del rayado que sea, 100, 180 y 200 hojas
                                        </Card.Text>
                                    </Card.Body>
                                 </Card>
                                 <br></br>
                                 <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="http://localhost/Papeleria/public/Imagenes/estilografo.jpeg" />
                                    <Card.Body>
                                        <Card.Title>Estilografo</Card.Title>
                                        <Card.Text>
                                            Ideales para los estudiantes de dibujo y arquitectura
                                        </Card.Text>
                                    </Card.Body>
                                 </Card>
                                 </CardGroup>
                                 <br></br>
                                 <Card className="Linea"></Card>
                                 <br></br>
                                 <h2 className="Titulo">Tabla de existencias</h2>
                                 <br></br>
                                 <InputGroup className="Input">
                                      <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">Buscar por producto</InputGroup.Text>
                                      </InputGroup.Prepend>
                                      <FormControl
                                        value={this.state.text} 
                                        onChange={(text) => this.filter(text)}
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                      />
                                  </InputGroup>
                                  <br></br>

                                <Table className="table table-bordered order-table ">
                                    <thead>
                                        <tr>
                                        <th>SKU</th>
                                        <th>Producto</th>
                                        <th>Marca</th>
                                        <th>Precio (MXN)</th>
                                        <th>Descripcion</th>
                                        </tr>
                                    </thead>
                                    <tbody id="bodytable">
                                       {this.renderList()}
                                    </tbody>
                                </Table>
            </div>
        );
    }

    renderList(){

        return this.state.articulo.map((data)=>{
    
          return(
            <tr>
              <td>{data.sku}</td>
              <td>{data.producto}</td>
              <td>{data.marca}</td>
              <td>{data.precio}</td>
              <td>{data.descripcion}</td>
            </tr>
          )
    
        })
    
      }
}

if (document.getElementById('producto')) {
    ReactDOM.render(<Producto />, document.getElementById('producto'));
}
