import React from 'react';
import { createContext, useState, useEffect} from "react";
import axios from "axios";


export const dataContext = createContext();


const DataProvider = ({children}) => {
    const [data, setData] = useState([]); // data
    const [cart, setCart] = useState([]); // cart empty




    useEffect(() => {
        axios("http://localhost:4000/api/products").then((res) => setData(res.data));
    }, [])


    return <dataContext.Provider value={{ data, cart, setCart }}>{children}</dataContext.Provider>
};


export default DataProvider;