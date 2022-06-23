import {RimacContext} from "./rimacContext";
import React, {useReducer} from "react";
import {Client, Coverage, Detail, RimacState} from "../interface";
import { rimacReducer } from "./rimacReducer";

const INITIAL_STATE : RimacState  = {
    coverage: [

    ],
    client: {
        id: "",
        phone: "",
        license: "",
        dni: ""
    },
    detail: {
        model: "",
        year: "",
        brand: "",
        total: 0
    }
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const RimacProvider = ({children} : Props) => {

    const [ rimacState, dispatch ] = useReducer(rimacReducer, INITIAL_STATE);

    const addClient = (client : Client) => {
        dispatch({ type: 'addClient', payload: client })
    }

    const addCoverage = (coverage: Coverage) => {
        dispatch({ type: 'addCoverage',payload: coverage })
    }

    const deleteCoverage = (id: string) => {
        dispatch({ type: 'deleteCoverage', payload: {id}})
    }

    const addDetail = (detail: Detail) => {
        dispatch({ type: 'addDetail',payload: detail })
    }

    return (
        <RimacContext.Provider value={{
            rimacState,
            addClient,
            addCoverage,
            deleteCoverage,
            addDetail
        }}>
            {children}
        </RimacContext.Provider>
    )
}