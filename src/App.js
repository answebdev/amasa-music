import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Coldplay');

  useEffect(() => {
    fetchArtists();
  }, []);

  // Fetch data
  const fetchArtists = async () => {
    // const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${searchTerm}`;
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay`;

    const response = await fetch(url);
    const data = await response.json();

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(data);
    // console.log(searchTerm);

    if (data.artists) {
      setArtists(data.artists);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p>AMASA Music</p>

        <div>
          {artists.map((artist) => {
            return (
              <div key={artist.idArtist}>
                <p>Artist: {artist.strArtist}</p>
                <p>Country: {artist.strCountry}</p>
                <p>Genre: {artist.strGenre}</p>
                <p>
                  Website:{' '}
                  <a
                    href={`https://${artist.strWebsite}`}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {artist.strArtist}
                  </a>
                </p>
                <p>
                  Twitter:{' '}
                  <a
                    href={`https://${artist.strTwitter}`}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {artist.strArtist}
                  </a>
                </p>
              </div>
            );
          })}
          {/* <p>{searchTerm}</p> */}
        </div>

        {/* {artists.map((artist) => {
          return (
            <div>
              <p>{artist.strArtist}</p>;
            </div>
          );
        })} */}
      </header>
    </div>
  );
};

export default App;
