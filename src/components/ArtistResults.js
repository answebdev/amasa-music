// import React, { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Spinner from './misc/Spinner';
import NoImage from '../img/no-image-available.webp';
import classes from '../styles/ArtistResults.module.css';
import { Row, Col, Card } from 'react-bootstrap';

const ArtistResults = (props) => {
  // const [error] = useState(false);

  return (
    <div>
      <Helmet>
        <title>iSounds Music | Search Artists</title>
      </Helmet>

      {props.artists.map((artist) => {
        return (
          <div className={classes.OuterContainer}>
            <div className={classes.Container}>
              <Row key={artist.idArtist}>
                <Col md={12}>
                  {props.isNotFound ? (
                    <div></div>
                  ) : (
                    <Card className='text-center'>
                      <Card.Header>
                        <span style={{ fontSize: '26px' }}>
                          <strong>{artist.strArtist}</strong>
                        </span>
                      </Card.Header>
                      <Card.Body>
                        <Card.Img
                          style={{ width: '80%' }}
                          variant='top'
                          src={
                            artist.strArtistWideThumb
                              ? artist.strArtistWideThumb
                              : NoImage
                          }
                          alt={artist.strArtist}
                        />
                        <p></p>
                        <Card.Text>
                          <strong>Genre:</strong> {artist.strGenre}
                        </Card.Text>
                        <Card.Text>
                          <strong>Origin:</strong> {artist.strCountry}
                        </Card.Text>
                        <Card.Text>
                          <strong>Website: </strong>
                          <a
                            style={{ textDecoration: 'none' }}
                            href={`https://${artist.strWebsite}`}
                            rel='noopener noreferrer'
                            target='_blank'
                          >
                            {artist.strWebsite}
                          </a>
                        </Card.Text>
                        <br />
                        <Link
                          className={classes.Link}
                          to={`artist/${artist.idArtist}`}
                        >
                          Albums
                        </Link>
                        <p></p>
                      </Card.Body>
                    </Card>
                  )}
                </Col>
              </Row>
            </div>
          </div>
        );
      })}

      {!props.isLoading ? <div className='text-center'></div> : <Spinner />}

      {/* {!props.isLoading && error ? (
        <div>
          <p style={{ textAlign: 'center' }}>Oh, no. something went wrong!</p>
        </div>
      ) : null} */}
    </div>
  );
};

export default ArtistResults;
