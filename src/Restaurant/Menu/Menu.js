import { Container } from 'react-bootstrap';
import MenuItem from './MenuItem';

const Menu = (props) => {

    return (
        <Container style={{ height: "65%", border: "5px solid black" }}>
            {
                props.restobject.map((menuItem, index) => <MenuItem item={menuItem} key={index} />)
            }
        </Container>
    )
}

export default Menu;


