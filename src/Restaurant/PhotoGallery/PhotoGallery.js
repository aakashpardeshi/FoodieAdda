import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import "./PhotoGallery.css"

function PhotoGallery(props) {
    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container style={{ height: "65%" }}>

            <Row xs={1} md={2}>
                <Col>
                    <div className='container' style={{ marginTop: "2%", marginBottom: "2%", height: "100%", width: "100%" }}>
                        <Carousel activeIndex={index} variant="dark" onSelect={handleSelect} style={{ height: "100%", width: "100%" }}>
                            {
                                props.restobject.restImages.map((imgSource , index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <Image 
                                                style={{height: "350px"}}
                                                src={imgSource}
                                                height={'100%'}
                                                width={"100%"}
                                            />
                                        </Carousel.Item>
                                    );
                                })
                            }
                        </Carousel>

                    </div>
                </Col>
                <Col>
                    <div className="container" style={{marginTop: "2%", marginBottom: "2%" }}>
                        <h2 style={{color: "white"}}>{props.restobject.restName}</h2>
                        <p>{props.restobject.address}</p>
                        <p>Timings: {props.restobject.startTime} AM - {props.restobject.endTime} PM</p>
                        <div>
                            {
                                props.restobject.categories.map((category, index) => {
                                    return (<Badge key={index} style={{marginRight: "1%", fontSize: "100%"}} pill bg="secondary">
                                    {category}
                                  </Badge>);
                                })
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >


    );
}


export default PhotoGallery;