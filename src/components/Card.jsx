import React from "react"
import {Container, Row, Col} from 'react-bootstrap';

export default function Card(props){
    return(
    <Container className="w-50 cards">
        <Row className="py-0">
            <Col>
                <img src={`../src/images/${props.imageUrl}`} className="card--img"/>
            </Col>
            <Col>
                <Row className="card--head g-0">
                    <Col><img src="../images/loc.png" alt="" className="card--loc"/></Col>
                    <Col><p className="card--location">{props.location}</p></Col>
                    <Col><a href={props.googleMapsUrl} className="card--link">View on Google Maps</a></Col>
                </Row>
                <Row>
                    <h1 className="card--title">{props.title}</h1>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="card--text">{props.description}</p>
                </Row>
            </Col>
        </Row>
    </Container>
    )
}