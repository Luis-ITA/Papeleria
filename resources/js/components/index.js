import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import {Navbar, Nav, NavDropdown, Image} from 'react-bootstrap'
    import {BrowserRouter, Route, Switch} from 'react-router-dom'
    import Carrusel from './Carrusel'
    import Apartado from './Apartado'
    import Contacto from './Contacto'
    import Registro from './Registro'
    import Producto from './Producto'
    import "./index.css"
      
    class App extends Component {
        render(){
            return (
                <BrowserRouter>
                     <div>
                     <Navbar fixed="top" bg="light" expand="md">
                     <Navbar.Brand href="/Papeleria/public"> 
                     <img
                        className="NavPrincipal"
                        src="http://localhost/Papeleria/public/Imagenes/pape.png"     
                        alt=""
                    />{''}
                     </Navbar.Brand>
                     <Navbar.Brand className="NavTitulo" href="/Papeleria/public"> TecnoPapeleria </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="Fuente">
                            <Nav.Link href="/Papeleria/public/contacto"> Contacto </Nav.Link>
                            <Nav.Link href="/Papeleria/public/articulos"> Nuestros Articulos </Nav.Link>
                            <NavDropdown title="Clientes" id="basic-nav-dropdown" className="Fuente">
                                <NavDropdown.Item href="/Papeleria/public/apartados">Sistema De Apartados</NavDropdown.Item> 
                                <NavDropdown.Item href="/Papeleria/public/actionreg">Registrarse</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            </Navbar.Collapse>
                    </Navbar> 
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Carrusel />   
                    <br></br>
                    <Switch>
                        <Route path = "/Papeleria/public/apartados">
                            <Apartado />
                            <br></br>
                        </Route>
                        <Route path = "/Papeleria/public/contacto">
                            <Contacto />
                            <br></br>
                        </Route>
                        <Route path = "/Papeleria/public/actionreg">
                            <Registro />
                            <br></br>
                        </Route>
                        <Route path = "/Papeleria/public/articulos">
                            <Producto />
                            <br></br>
                        </Route>
                    </Switch> 
                    </div>   
                </BrowserRouter>
            )
        }
     }
ReactDOM.render(<App/>,document.getElementById('app'))
    