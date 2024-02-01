// To create a centralised Data storage context usable across the App

import { useContext,createContext,useState,useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({children}) =>{
    const [data,setData] = useState()
    const fetchData = async() =>{
        try {
            const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
            const tempdata = await response.json()
            setData(tempdata)
            
        } catch (error) {
            console.log("Error:",error)
        }
    }
    
    return(
        <DataContext.Provider value={{
            data,fetchData,
        }}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);
export {useData,DataProvider}
