import { Col, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
const MenuItem = (props) => {

    return (
    <div>
        <Row xs={1} md={2}>
            <Col>
            {console.log(props)}
                <div className='container' style={{ marginTop: "2%", marginBottom: "2%", height: "100%", width: "100%" }}>
                    <Image
                        style={{ height: "350px" }}
                        src={props.item.image}
                        height={'200px'}
                        width={"200px"}
                    />
                </div>
            </Col>
            <Col>
                <div className="container" style={{ marginTop: "2%", marginBottom: "2%" }}>
                    <h2 style={{ color: "white" }}>{props.item.name}</h2>
                    <p>Price: ${props.item.price}</p>
                    <p>{props.item.description}</p>
                    <Badge pill bg="secondary">
                        {props.item.category}
                    </Badge>
                    <Button variant="success">Add To Cart</Button>
                </div>
            </Col>
        </Row>
    </div>
    )
}

export default MenuItem;