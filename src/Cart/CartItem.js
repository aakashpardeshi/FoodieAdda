import React, { useEffect, useState } from "react";
import { useStateValue } from "../Context/StateProvider";
import { actionType } from "../Context/Reducer";
import { fetchCart } from "../utils/fetchLocalStorage";
let items = [];

const CartItem = ({ item, setFlag, flag }) => {
    const [{ cartItems }, dispatch] = useStateValue();
    const [qty, setQty] = useState(0);

    const cartDispatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        });
    };

    const updateQty = (action, id) => {
        if (action == "add") {
            setQty(qty + 1);
            cartItems.map((item) => {
                if (item.id === id) {
                    item.qty += 1;
                    setFlag(flag + 1);
                }
            });
            cartDispatch();
        } else {
            // initial state value is one so you need to check if 1 then remove it
            if (qty == 1) {
                items = cartItems.filter((item) => item.id !== id);
                setFlag(flag + 1);
                cartDispatch();
            } else {
                setQty(qty - 1);
                cartItems.map((item) => {
                    if (item.id === id) {
                        item.qty -= 1;
                        setFlag(flag + 1);
                    }
                });
                cartDispatch();
            }
        }
    };

    useEffect(() => {
        items = cartItems;
    }, [qty, items]);

    return (
        <div>
            <img
                src={item?.image}
                alt="image"
            />

            {/* name section */}
            <div >
                <p >{item?.name}</p>
                <p >
                    $ {parseFloat(item?.price) * qty}
                </p>
            </div>


            <p className="justify-center">
                {qty}
            </p>
        </div>
    );
};

export default CartItem;