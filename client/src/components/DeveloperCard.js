import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import {FaGithub} from 'react-icons/fa';

function DeveloperCard(props) {
    
    return (
        <Card className="developer-card" style={{ width: '26rem', height: '10rem', padding: '10px', margin: '10px auto'}}>
            <Row className="developerRow">
                <Col className="col-6">
                    <Card.Img  className="developer-card-img"  src={props.image} alt={props.name}/> 
                </Col>
                <Col className="col-6 developer-col">
                    <Card.Title className="card-title developer-name">{props.name}</Card.Title>
                    <Card.Link  href={props.github} target="_#"> <FaGithub className="user-github"/> </Card.Link>
                </Col>
            </Row>
      </Card>
    )
};

export default DeveloperCard;