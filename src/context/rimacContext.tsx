import React, {createContext} from "react";
import {Client, Coverage, Detail, RimacState} from "../interface";

export type RimacContextProps = {
    rimacState: RimacState,
    addClient: ( client: Client) => void
    addCoverage: (coverage: Coverage) => void
    deleteCoverage: (id: string) => void
    addDetail: (detail: Detail) => void
}

export const RimacContext = createContext<RimacContextProps>({} as RimacContextProps);