import Image from 'react-bootstrap/Image';
import image from './banner.png';
import Button from "react-bootstrap/Button";
import './bannerStyle.css'
import { Col, Container, Row } from 'react-bootstrap';
function HomeBanner() {

    return (
        <Container style={{
            height: '65%'
          }}>
            <Row xs={1} md={2}> 
                <Col>
                    <div style={{ marginTop: '20%'}}>
                        <p style={{ 'color': 'white' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum diam lacus, magnis.

                            Diam tempus lorem laoreet mattis orci sagittis velit. Amet scelerisque diam non quis amet adipiscing.
                            Diam tempus lorem laoreet mattis orci sagittis velit. Amet scelerisque diam non quis amet adipiscing.
                            Diam tempus lorem laoreet mattis orci sagittis velit. Amet scelerisque diam non quis amet adipiscing.
                            Diam tempus lorem laoreet mattis orci sagittis velit. Amet scelerisque diam non quis amet adipiscing.
                            Diam tempus lorem laoreet mattis orci sagittis velit. Amet scelerisque diam non quis amet adipiscing.

                        </p>
                    </div>
                    <div style={{ marginTop: '5%'} }>
                        <Button variant="primary">
                            {'Order Now'}
                        </Button>
                    </div>
                </Col>
                <Col>
                    <div style={{ marginTop: '5%', marginleft:'15%'}}>
                        <Image src={image} rounded alt="banner" height={'20%'} width={'100%'}>
                        </Image>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export default HomeBanner;