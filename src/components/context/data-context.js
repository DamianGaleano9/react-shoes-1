import React from 'react';
import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const dataContext = createContext();


const DataProvider = ({ children }) => {
    const [data, setData] = useState([]); // data
    const [cart, setCart] = useState([]); // cart empty




    useEffect(() => {
        axios("http://localhost:4000/api/products").then((res) => setData(res.data[0]));
    }, [])



    const buyProducts = (product) => {
        const productrepeat = cart.find((item) => item.products_id === product.products_id);

        if (productrepeat) {
            setCart(cart.map((item) => (item.id === product.products_id ? {
                ...product, products_quanty:
                    productrepeat.products_quanty + 1
            } : item)));
        } else {
            setCart([...cart, product]);
        }
    }

    return <dataContext.Provider value={{ data, cart, setCart, buyProducts }}>{children}</dataContext.Provider>
};


export default DataProvider;