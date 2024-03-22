/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
    const dispatchActions = useDispatch();

    const { id, name, qty, total, price } = props.item;

    const incrementQtyHandler = () => {
        dispatchActions(cartActions.addItemToCart({ id, name, price }));
    };

    const decrementQtyHandler = () => {
        dispatchActions(cartActions.removeItemFromCart(id));
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{name}</h3>
                <div className={classes.price}>
                    Rs {total.toFixed(2)}{" "}
                    <span className={classes.itemprice}>
                        (Rs {price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{qty}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={decrementQtyHandler}>-</button>
                    <button onClick={incrementQtyHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
