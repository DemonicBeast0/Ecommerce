import { use } from "react";
import {createContext,useState} from "react";

const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({childern})=>{


    const [data,setData] = useState({})
    const[name,setName] = useState("")

return(
    
    <GlobalStateContext.Provider value={{data,setData, name, setName}}>
        {childern}
    </GlobalStateContext.Provider>
)


}
export const useGlobalState = () => use(GlobalStateContext);