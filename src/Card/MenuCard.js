import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function MenuCard(props) {
  return (
    <Col>
      <Card style={{ background: "linear-gradient(135.77deg, rgba(255, 255, 255, 0.4) -94.16%, rgba(255, 255, 255, 0) 100%)", backdropfilter: "blur(21px)", borderradius: "16px", boxShadow: "10", width: "100%" }}>
        <Card.Img variant="top" src={props.img} style={{ borderRadius:'10%', height: "80%", width: "100%", padding: "2%" }} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", color: "white" }}>{props.name}</Card.Title>
          <Card.Text>
            <b style={{ color: "white" }}>{'Price: $ ' + props.price}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MenuCard;