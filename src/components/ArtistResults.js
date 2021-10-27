import React, { useState } from 'react';
import Spinner from './misc/Spinner';
// import classes from '../styles/MovieList.module.css';

const ArtistResults = (props) => {
  const [error] = useState(false);

  return (
    <div>
      <div>
        {props.artists.map((artist) => {
          return (
            <div key={artist.idArtist}>
              <p>Artist: {artist.strArtist}</p>
              <p>Country: {artist.strCountry}</p>
              <p>Genre: {artist.strGenre}</p>
              <img src={artist.strArtistWideThumb} alt={artist.strArtist} />
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

        {!props.isLoading ? <div className='text-center'></div> : <Spinner />}

        {!props.isLoading && error ? (
          <div>
            <p style={{ textAlign: 'center' }}>Oh, no. something went wrong!</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ArtistResults;
