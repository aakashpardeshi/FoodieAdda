import { Col, Row } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import "./MenuItem.css"

const MenuItem = (props) => {
    return (
    <div>
        <Row xs={1} md={2} className="justify-content-md-center" style={{
            marginTop: "2%",
            marginBottom: "2%", 
            boxSizing: "border-box",
            backdropFilter:"blur(21px)", 
            background: "linear-gradient(135.77deg, rgba(255, 255, 255, 0.4) -94.16%, rgba(255, 255, 255, 0) 100%",
            borderRadius:"16px",
            width: "90%"
            }}>

            <Col xs={4} md={3}>
                 <div style={{ 
                    width: "100%",
                    }}>
                    <Image style={{borderRadius: "16px", marginTop: "2%", marginBottom: "2%"}}
                        src={props.item.image}
                        width={"100%"}
                        height={"100%"}
                    />
                    
                </div>
            </Col>
            <Col xs={8} md={8}>
                <div style={{ 
                    marginTop: "5%", 
                    width: "100%", 
                    // border: "1px solid black"
                }}>
                    <h4 style={{ color: "white" }}>{props.item.name}</h4>
                    <p>Price: ${props.item.price}</p>
                    <p>{props.item.description}</p>
                    <Badge style={{margin: "1%"}} pill bg="secondary">
                        {props.item.category}
                    </Badge>
                    <Button style={{margin: "1%"}} variant="success" onClick={
                        (e)=>props.onAdd([...props.cartItems, props.item])
                    }>Add To Cart</Button>
                </div>
            </Col>
        </Row>
    </div>
    )
}

export default MenuItem;