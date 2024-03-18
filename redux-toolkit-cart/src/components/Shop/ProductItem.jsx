/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart";

const ProductItem = (props) => {
    const dispatchActions = useDispatch();
    const { id, name, price, desc } = props;

    const addItemToCartHandler = () => {
        dispatchActions(cartActions.addItemToCart({ id, name, price, desc }));
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{name}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{desc}</p>
                <div className={classes.actions}>
                    <button onClick={addItemToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
