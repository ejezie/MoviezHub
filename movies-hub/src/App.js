import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fecthTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanticMovies} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
