import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Artist from './components/Artist';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/artist/:id' component={Artist} />
          {/* <Route exact path='/artists' component={ArtistList} />
          <Route exact path='/artists/:id' component={Artist} />
          <Route component={Error} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import ArtistResults from './components/ArtistResults';
// import Input from './components/Input';
// import './App.css';

// const App = () => {
//   const [artists, setArtists] = useState([]);
//   const [album, setAlbums] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // useEffect(() => {
//   //   fetchArtists(searchTerm);
//   //   fetchAlbums();
//   // }, [searchTerm]);

//   // If nothing is searched, do not fetch and display data
//   useEffect(() => {
//     if (searchTerm) {
//       setIsLoading(true);
//       fetchArtists(searchTerm).then((data) => {
//         setIsLoading(false);
//       });
//     } else {
//       setIsLoading(false);
//     }
//   }, [searchTerm]);

//   // Fetch data
//   const fetchArtists = async (searchTerm) => {
//     const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${searchTerm}`;
//     // const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay`;

//     const response = await fetch(url);
//     const data = await response.json();

//     fetch(url)
//       .then((response) => {
//         setIsLoading(false);
//         return response.json();
//       })
//       .catch((error) => {
//         setIsLoading(false);
//         console.log(error);
//       });

//     console.log(data);
//     // console.log(searchTerm);

//     if (data.artists) {
//       setArtists(data.artists);
//     }

//     // return setArtists(data.artists);
//   };

//   const fetchAlbums = async () => {
//     // const albumUrl = `theaudiodb.com/api/v1/json/${1}/discography.php?s=coldplay`;
//     const albumUrl = `https://theaudiodb.com/api/v1/json/${1}/album.php?i=111239`;

//     const response = await fetch(albumUrl);
//     const data = await response.json();

//     fetch(albumUrl)
//       .then((response) => {
//         return response.json();
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     // console.log(data);

//     if (data.album) {
//       setAlbums(data.album);
//     }
//   };

//   return (
//     <div>
//       <Input
//         artists={artists}
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//       />
//       <ArtistResults artists={artists} isLoading={isLoading} />

//       {/* <div>
//         {album.map((item) => {
//           return (
//             <div key={item.idAlbum}>
//               <p>Artist: {item.strArtist}</p>
//               <p>Album: {item.strAlbum}</p>
//               <p>Year: {item.intYearReleased}</p>
//               <img src={item.strAlbumThumb} alt='' />
//               <hr />
//             </div>
//           );
//         })}
//       </div> */}
//     </div>
//   );
// };

// export default App;
