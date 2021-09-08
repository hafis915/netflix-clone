import './App.css';
import Navbar from "./Navbar"
import Poster from "./Poster"
import Row from "./Row"
import "./App.css"
const fetchMovie = require("./url")

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Poster url={fetchMovie.netflixOriginal} />
      <Row isLargeRow title="Netflix Original" url={fetchMovie.netflixOriginal} />
      <Row title="Trending" url={fetchMovie.trending} />
      <Row title="Top Rated" url={fetchMovie.topRated} />
      <Row title="Action Movies" url={fetchMovie.actionMovies} />
      <Row title="Commedy" url={fetchMovie.comedyMovies} />
      <Row title="Documentary" url={fetchMovie.documentariesMovies} />
    </div>
  );
}

export default App;
