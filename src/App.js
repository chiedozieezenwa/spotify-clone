import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './components/DataLayer';


const spotify = new SpotifyWebApi();

function App() {

  // Pulling information from the Datalayer
  const [{ user, token } , dispatch] = useDataLayerValue();

  // useEffect runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    // window.location.hash = "";

    if (_token) {
      // pulling the token out of the Datalayer with dispatch.
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      
      
      //Here, we use our token to access the user's profile on spotify.
      spotify.setAccessToken(_token);

      // pushing ther "user" into the Datalayer
      spotify.getMe().then((user) => {

        // pulling the user from the Datalayer with dispatch
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });


      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
    }
    
  }, []);

      

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
