import {ClientContext} from "./clientContex";
import React, {useReducer} from "react";
import { RimacState} from "../interface";
import {clientReducer} from "./clientReducer";

const INITIAL_STATE : RimacState  = {
    coverage: [
        {
            id: "",
            type: "",
            price: 0,
            name: "",
            description: ""
        }
    ],
    client: {
        id: "",
        phone: "",
        license: "",
        dni: ""
    }
}

interface Props {
    children: React.ReactNode
}

export const ClientProvider = ({children} : Props) => {

    const [ state, dispatch ] = useReducer(clientReducer, initialState)

    return (
        <ClientContext.Provider value={{  }}>
            {children}
        </ClientContext.Provider>
    )
}