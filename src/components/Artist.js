import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Row, Col, Card, Accordion } from 'react-bootstrap';
import classes from '../styles/Artist.module.css';

const Artist = ({ match }) => {
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

      <div className={classes.OuterContainer}>
        <div className={classes.Container}>
          <div className={classes.ArtistStyle}>
            {album.map((item) => {
              return (
                <Row key={item.id}>
                  <Col>
                    <Card className={classes.MainCard}>
                      <Card.Img
                        variant='top'
                        src={item.strAlbumThumb}
                        alt={item.strArtist}
                      />
                      <Card.Body>
                        <Card.Title>{item.strAlbum}</Card.Title>
                        <Card.Text>
                          <strong>Year: </strong>
                          {item.intYearReleased}
                          <br />
                          <strong>Genre: </strong>
                          {item.strGenre}
                          <br />
                          <strong>Label: </strong>
                          {item.strLabel}
                        </Card.Text>

                        <Card.Text>
                          <Accordion defaultActiveKey='1' flush>
                            <Accordion.Item eventKey='0'>
                              <Accordion.Header>Description</Accordion.Header>
                              <Accordion.Body>
                                {item.strDescriptionEN}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          </div>

          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <Link
              className={classes.Link}
              to='/'
              variant='dark'
              role='button'
              aria-pressed='true'
            >
              <i
                className='fas fa-arrow-left'
                onClick={() => history.goBack()}
              ></i>
              &nbsp;Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
