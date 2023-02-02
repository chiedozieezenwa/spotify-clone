export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQD_WOBks5BcEK12ChqQdSUjDCBeGPgIcJBOu6fdvpsRkiI29k2GPfhX0kO06RVpMwi-Mgi5fe-ezPrvalxGu_VTj9U9s6HQqrYYqqZuOiRWCThW-rWVt3da0yMA1_GqVXv3Adrw7xl4741ODH3vD-lXEOF2rkLHYMxA9LMmpBjaCv6PMRgF3P1v8H17X4yheHdOXB5KpJWxeermT6PzwQ&token_type=Bearer&expires_in=3600",
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
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
            
        default:
            return state;
    }
}


export default reducer;
