import {Client, Coverage, RimacState} from "../interface";

type RimacAction =
    | { type: 'addClient', payload: Coverage }

export const clientReducer = (state : RimacState, action : RimacAction) => {
    switch (action.type) {
        case 'addClient':
            return {
                ...state,
                coverage: [...state.coverage,action.payload]
            }
        default:
            return state
    }
}