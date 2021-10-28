import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Spinner from './misc/Spinner';
import classes from '../styles/ArtistResults.module.css';
import { Row, Col, Image, Card, Button } from 'react-bootstrap';

const ArtistResults = (props) => {
  const [error] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Amasa Music | Search Artists</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        ></link>
      </Helmet>

      {/* <div> */}
      {props.artists.map((artist) => {
        return (
          <div className={classes.OuterContainer}>
            <div className={classes.Container}>
              <Row key={artist.idArtist}>
                <Col md={12}>
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
                        src={artist.strArtistWideThumb}
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
                </Col>
              </Row>
            </div>
          </div>
        );
      })}

      {!props.isLoading ? <div className='text-center'></div> : <Spinner />}

      {!props.isLoading && error ? (
        <div>
          <p style={{ textAlign: 'center' }}>Oh, no. something went wrong!</p>
        </div>
      ) : null}
      {/* </div> */}
    </div>
  );
};

export default ArtistResults;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import Spinner from './misc/Spinner';
// import classes from '../styles/ArtistResults.module.css';
// import { Row, Col, Card, Button } from 'react-bootstrap';

// const ArtistResults = (props) => {
//   const [error] = useState(false);

//   return (
//     <div className={classes.Container}>
//       <Helmet>
//         <title>Amasa Music | Search Artists</title>
//         <link
//           rel='stylesheet'
//           href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
//         ></link>
//       </Helmet>
//       <div>
//         {props.artists.map((artist) => {
//           return (
//             <Row key={artist.idArtist}>
//               <Col md={6}>
//                 <div>
//                   <Card style={{ width: '28rem', marginBottom: '40px' }}>
//                     <Card.Img
//                       variant='top'
//                       src={artist.strArtistWideThumb}
//                       alt={artist.strArtist}
//                     />
//                     <Card.Body>
//                       <Card.Title>{artist.strArtist}</Card.Title>
//                       <Card.Text>Country: {artist.strCountry}</Card.Text>
//                       <Card.Text>Genre: {artist.strGenre}</Card.Text>
//                       <Card.Text>
//                         {' '}
//                         Website:{' '}
//                         <a
//                           href={`https://${artist.strWebsite}`}
//                           rel='noopener noreferrer'
//                           target='_blank'
//                         >
//                           {artist.strArtist}
//                         </a>
//                       </Card.Text>
//                       <Card.Text>
//                         {' '}
//                         Twitter:{' '}
//                         <a
//                           href={`https://${artist.strTwitter}`}
//                           rel='noopener noreferrer'
//                           target='_blank'
//                         >
//                           {artist.strArtist}
//                         </a>
//                       </Card.Text>
// <Link
//   className={classes.Link}
//   to={`artist/${artist.idArtist}`}
// >
//   Albums
// </Link>
//                     </Card.Body>
//                   </Card>
//                 </div>
//               </Col>
//             </Row>
//           );
//         })}

//         {!props.isLoading ? <div className='text-center'></div> : <Spinner />}

//         {!props.isLoading && error ? (
//           <div>
//             <p style={{ textAlign: 'center' }}>Oh, no. something went wrong!</p>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default ArtistResults;
