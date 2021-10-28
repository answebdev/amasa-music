import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import classes from '../styles/Artist.module.css';
// import axios from 'axios';

const Artist = ({ match }) => {
  //   const [data, setData] = useState([]);
  const [album, setAlbums] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetchAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAlbums = async () => {
    const albumUrl = `https://theaudiodb.com/api/v1/json/${1}/album.php?i=${
      match.params.id
    }`;

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

    if (data.album) {
      setAlbums(data.album);
    }
  };

  return (
    <div>
      {album.map((item) => (
        <Helmet>
          <title key={item.id}>Amasa Music | Albums | {item.strArtist}</title>
        </Helmet>
      ))}

      <div style={{ marginTop: '40px', marginBottom: '40px' }}>
        <Link to='/' variant='dark' role='button' aria-pressed='true'>
          <i className='fas fa-arrow-left' onClick={() => history.goBack()}></i>
          &nbsp;BACK TO ARTISTS
        </Link>
      </div>
      <div>
        {album.map((item) => {
          return (
            <div key={item.id}>
              <img
                style={{ width: '25%', height: '25%' }}
                src={item.strAlbumThumb}
                alt={item.strArtist}
              />
              <p>Artist: {item.strArtist}</p>
              <p>Album: {item.strAlbum}</p>
              <p>Year: {item.intYearReleased}</p>
              <p>Genre: {item.strGenre}</p>
              {/* <p>Review: {item.strReview}</p> */}
            </div>
          );
        })}

        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Link to='/' variant='dark' role='button' aria-pressed='true'>
            <i
              className='fas fa-arrow-left'
              onClick={() => history.goBack()}
            ></i>
            &nbsp;BACK TO ARTISTS
          </Link>
        </div>
        {/* {data.map((item) => (
          <div key={item.id}>
            <div>
              <p>
                {item.album} ({item.year})
              </p>

              <p>Track Listing</p>

              {item.tracks.map((track, index) => (
                <div key={index}>
                  <p>{track}</p>
                </div>
              ))}
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Artist;
