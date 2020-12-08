import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import logo from "../images/New_Jar.svg"



function DeveloperCard(props) {
    
    return (
        <Card className="developer-card" style={{ width: '20rem', height: '12rem', padding: '10px', margin: '10px auto'}}>
            <Row className="developerRow">
                <Col className="col-6">
                    <Card.Img  className="developer-card-img"  src={props.image} alt={props.name}/> 
                </Col>
                <Col className="col-6 developer-col">
                    <Card.Title className="card-title developer-name">{props.name}</Card.Title>
                    <Card.Link  href={props.github} target="_#"> github profile</Card.Link>
                    <br></br>
                    <img  className="developer-jar"src={logo} alt="logo" width="12px"/> 
                </Col>
            </Row>
      </Card>
    )
};

export default DeveloperCard;