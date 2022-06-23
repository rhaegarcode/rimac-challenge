import {Client, Coverage, Detail, RimacState} from "../interface";

type RimacAction =
    | { type: 'addClient', payload: Client }
    | { type: 'addCoverage',payload: Coverage }
    | { type: 'deleteCoverage', payload: { id: string }}
    | { type: 'addDetail',payload: Detail }

export const rimacReducer = (state : RimacState, action : RimacAction) : RimacState => {
    switch (action.type) {
        case 'addClient':
            return {
                ...state,
                client: action.payload
            }
        case 'addCoverage':
            return {
                ...state,
                coverage: [...state.coverage,action.payload]
            }
        case 'deleteCoverage':
            return {
                ...state,
                coverage: state.coverage.filter(item => item.id !== action.payload.id)
            }
        case 'addDetail':
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}