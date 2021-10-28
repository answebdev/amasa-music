import React, { useState } from 'react';
import Spinner from './misc/Spinner';
import classes from '../styles/ArtistResults.module.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const ArtistResults = (props) => {
  const [error] = useState(false);

  return (
    // <div className={classes.Container}>
    //   <div>
    //     {props.artists.map((artist) => {
    //       return (
    //         <div key={artist.idArtist}>
    //           <p>Artist: {artist.strArtist}</p>
    //           <p>Country: {artist.strCountry}</p>
    //           <p>Genre: {artist.strGenre}</p>
    //           <img src={artist.strArtistWideThumb} alt={artist.strArtist} />
    //           <p>
    //             Website:{' '}
    //             <a
    //               href={`https://${artist.strWebsite}`}
    //               rel='noopener noreferrer'
    //               target='_blank'
    //             >
    //               {artist.strArtist}
    //             </a>
    //           </p>
    //           <p>
    //             Twitter:{' '}
    //             <a
    //               href={`https://${artist.strTwitter}`}
    //               rel='noopener noreferrer'
    //               target='_blank'
    //             >
    //               {artist.strArtist}
    //             </a>
    //           </p>
    //         </div>
    //       );
    //     })}

    //     {!props.isLoading ? <div className='text-center'></div> : <Spinner />}

    //     {!props.isLoading && error ? (
    //       <div>
    //         <p style={{ textAlign: 'center' }}>Oh, no. something went wrong!</p>
    //       </div>
    //     ) : null}
    //   </div>
    // </div>

    <div className={classes.Container}>
      <Row>
        <Col md={6}>
          {!props.isLoading ? <div className='text-center'></div> : <Spinner />}

          {!props.isLoading && error ? (
            <div>
              <p style={{ textAlign: 'center' }}>
                Oh, no. something went wrong!
              </p>
            </div>
          ) : null}

          <div>
            {props.artists.map((artist) => {
              return (
                <div key={artist.idArtist}>
                  <Card style={{ width: '28rem' }}>
                    <Card.Img
                      variant='top'
                      src={artist.strArtistWideThumb}
                      alt={artist.strArtist}
                    />
                    <Card.Body>
                      <Card.Title>{artist.strArtist}</Card.Title>
                      {/* <Card.Text>{artist.strBiographyEN}</Card.Text> */}
                      <Card.Text>Country: {artist.strCountry}</Card.Text>
                      <Card.Text>Genre: {artist.strGenre}</Card.Text>
                      <Card.Text>
                        {' '}
                        Website:{' '}
                        <a
                          href={`https://${artist.strWebsite}`}
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          {artist.strArtist}
                        </a>
                      </Card.Text>
                      <Card.Text>
                        {' '}
                        Twitter:{' '}
                        <a
                          href={`https://${artist.strTwitter}`}
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          {artist.strArtist}
                        </a>
                      </Card.Text>
                      <Button className={classes.MoreBtn} variant='dark'>
                        View More
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}

            {/* {!props.isLoading ? (
              <div className='text-center'></div>
            ) : (
              <Spinner />
            )}

            {!props.isLoading && error ? (
              <div>
                <p style={{ textAlign: 'center' }}>
                  Oh, no. something went wrong!
                </p>
              </div>
            ) : null} */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ArtistResults;
