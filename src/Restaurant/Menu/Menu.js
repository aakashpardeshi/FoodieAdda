import { Container } from 'react-bootstrap';
import MenuItem from './MenuItem';
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/Reducer";
import React, { useEffect, useState } from 'react';
import "./MenuItem.css"
import { fetchCart } from "../../utils/fetchLocalStorage";

const Menu = (props) => {

    const [items, setItems] = useState(fetchCart());

    const [{ cartItems }, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items
        });
        localStorage.setItem("cartItems", JSON.stringify(items));
    }, [items]);


    return (
        <Container style={{ height: "100%" }}>
            {
                props.restobject.map((menuItem, index) => <MenuItem cartItems={cartItems} onAdd={setItems} item={menuItem} key={index} />)
            }
        </Container>
    )
}

export default Menu;


