import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [artists, setArtists] = useState([]);
  const [album, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Coldplay');

  useEffect(() => {
    fetchArtists();
    fetchAlbums();
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

  const fetchAlbums = async () => {
    // const albumUrl = `theaudiodb.com/api/v1/json/${1}/discography.php?s=coldplay`;
    const albumUrl = `https://theaudiodb.com/api/v1/json/${1}/album.php?i=111239`;

    const response = await fetch(albumUrl);
    const data = await response.json();

    fetch(albumUrl)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(data);
    // console.log(searchTerm);

    if (data.album) {
      setAlbums(data.album);
    }
  };

  return (
    <div>
      <header>
        <p>AMASA Music</p>

        <div>
          {artists.map((artist) => {
            return (
              <div key={artist.idArtist}>
                <p>Artist: {artist.strArtist}</p>
                <p>Country: {artist.strCountry}</p>
                <p>Genre: {artist.strGenre}</p>
                <img src={artist.strArtistWideThumb} alt='' />
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
          {album.map((item) => {
            return (
              <div key={item.idAlbum}>
                <p>Artist: {item.strArtist}</p>
                <p>Album: {item.strAlbum}</p>
                <p>Year: {item.intYearReleased}</p>
                <img src={item.strAlbumThumb} alt='' />
                <hr />
              </div>
            );
          })}

          {/* <p>{searchTerm}</p> */}
        </div>

        <hr />

        {/* <div>
          {albums.map((album) => {
            return (
              <div key={album.idArtist}>
                <p>Artist: {album.strArtist}</p>
                <p>Album: {album.strAlbum}</p>
              </div>
            );
          })}
        </div> */}
      </header>
    </div>
  );
};

export default App;
