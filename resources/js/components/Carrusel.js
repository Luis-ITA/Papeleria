import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Carousel, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Carrusel.css"

export default class Carrusel extends Component {
    render() {
        return (
                <div className="card">
                        <Carousel className="CarruPrinci">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="http://localhost/Papeleria/public/Imagenes/utiles.png"
                                alt="First slide"
                                />
                                <Carousel.Caption className="CarruFuente">
                                    <Card>
                                        Gran variedad de articulos escolares
                                    </Card> 
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="http://localhost/Papeleria/public/Imagenes/ofertas.jpg"
                                alt="Second slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="http://localhost/Papeleria/public/Imagenes/cliente.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>

                        </Carousel>
                </div>
        );
    }
}

if (document.getElementById('carrusel')) {
    ReactDOM.render(<Carrusel />, document.getElementById('carrusel'));
}
