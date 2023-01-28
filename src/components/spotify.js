// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirect_uri = "http://localhost:3000/"; 

const clientId = "7f387dadf861407b997462bbde6de8fd"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        window.location.hash = '';

        return initial
    }, {});
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;