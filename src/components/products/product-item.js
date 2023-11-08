import React from "react";
import { Link } from "react-router-dom";


export default function (props) {

    const { products_id, products_name, products_price, products_url } = props.item
    

    const buyProducts = () => {
        console.log('compraste');
        
    }

    return (
        <div className="product-item-wrapper">

            <Link to={`/product/${products_id}`}>
                <img src={products_url} alt={products_name} />
            </Link>
            <div className="description">
                <div className="products-name"><strong>{products_name}</strong></div>
                <div className="info-cart">
                    {products_price + "€"}
                </div>
                <div>
                    <button type="submit" className="btn" onClick={buyProducts}>BUY</button>

                </div>
            </div>



        </div>
    );
}
// import React from "react";
// import { Link } from "react-router-dom";
// import { dataContext } from "../Context/data-context";
// import { useContext } from "react";

// export default function ProductItem() {
//   const data = useContext(dataContext);

//   return (
//     <div className="product-item-wrapper">
//       {data.map((item) => (
//         <div key={item.products_id}>
//           <Link to={`/product/${item.products_id}`}>
//             <img src={item.products_url} alt={item.products_name} />
//           </Link>
//           <div className="description">
//             <div className="products-name">
//               <strong>{item.products_name}</strong>
//             </div>
//             <div className="info-cart">{item.products_price + "€"}</div>
//             <div>
//               <button type="submit" className="btn">
//                 BUY
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
