import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS = [
    {
        id: 1,
        name: "Meditations",
        price: 254,
        desc: "Book by Marcus Aurelius.",
    },
    { id: 2, name: "Outliers", price: 199, desc: "Some dummy description." },
    {
        id: 3,
        name: "So Good They Can't Ignore You",
        price: 150,
        desc: "Book by Cal Newport.",
    },
    {
        id: 4,
        name: "Discourses of EpicTetus",
        price: 350,
        desc: "Selected writings of Epictetus",
    },
];

const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {PRODUCTS.map((prod) => (
                    <ProductItem
                        key={prod.id}
                        id={prod.id}
                        name={prod.name}
                        price={prod.price}
                        desc={prod.desc}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
