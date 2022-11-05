
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useEffect, useState } from 'react';
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/Reducer";
import CartItem from './CartItem';

const CartContainer = () => {

    const [{ cartShow, cartItems }, dispatch] = useStateValue();
    const [flag, setFlag] = useState(1);
    const [tot, setTot] = useState(0);

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    };

    useEffect(() => {
    }, [cartShow]);
    return (
        <>
            <Offcanvas show={cartShow} onHide={showCart} placement={"end"}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cartItems && cartItems.length > 0 ? (
                        <div>
                            {cartItems &&
                                cartItems.length > 0 &&
                                cartItems.map((item, index) => (
                                    <CartItem
                                        key={index}
                                        item={item}
                                        setFlag={setFlag}
                                        flag={flag}
                                    />
                                ))}
                        </div>) : (<h2>Cart Empty!</h2>)
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default CartContainer;