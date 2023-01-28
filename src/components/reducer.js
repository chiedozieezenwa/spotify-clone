export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQDEOQsqPwpLcXcX6tmGFczgnGrPv9RujiorYM6TUK7_Nxk14WLmNm78ndkjF03FUe8tzyZgDwVO_SgQ-YBjTSARDU73hWqdya4aew6m1iAKk3rFNkybN8_nqpouOvN73K2V2Vo-8H-bvYzgzqR3fwaiBWgeITe357k6PnswlBs-jQuBVkUO2EPj-SRNExftdtgXzfEE9AH8c89iRLvl',
};

const reducer = (state, action) => {
console.log(action)


// Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlist: action.playlist,
            };
            
        default:
            return state;
    }
}


export default reducer;