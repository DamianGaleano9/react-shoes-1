import { useContext } from "react";
import { dataContext } from "../Context/data-context";


const ProductContainer = () => {
    const {data} = useContext(dataContext);

    return data.map((product) => {
        return (
            <div className="card">
                <img src={product.products_img} alt="img-no"/>
                    <h3>{product.products_name}</h3>
                    <h3>{product.products_price}</h3>
                    <button>Buy</button>
            </div>
        )
    })
}

export default ProductContainer;